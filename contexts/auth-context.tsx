'use client'

import type React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

interface User {
	_id: string
	firstName: string
	lastName: string
	email: string
	profileUrl?: string
	role: 'user' | 'admin'
	bio?: string
	skills?: string[]
	isVerified: boolean
	gender?: string
	phoneNumber?: string
	dateOfBirth?: string
	acceptTerms?: boolean
}

interface AuthContextType {
	user: User | null
	login: (email: string, password: string) => Promise<void>
	register: (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		confirmPassword: string,
	) => Promise<void>
	logout: () => Promise<void>
	updateUser: (updatedData: FormData) => Promise<void>
	loading: boolean
	error: string | null
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

const API_BASE_URL =
	process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001/api/v1'

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true) // full-page loading state
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		checkAuthStatus()
	}, [])

	// 🔹 Refresh token logic
	const refreshToken = async (): Promise<boolean> => {
		try {
			const refreshToken = localStorage.getItem('refreshToken') || ''
			if (!refreshToken) throw new Error('No refresh token found')

			const response = await fetch(`${API_BASE_URL}/auth/refresh-token`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ refreshToken }),
			})

			const data = await response.json()
			if (!response.ok || !data.success)
				throw new Error(data.message || 'Token refresh failed')

			// save new refreshToken if backend sends one
			if (data.data && data.data?.user?.refreshToken) {
				localStorage.setItem('refreshToken', data.data.user.refreshToken)
			}

			return true
		} catch (err) {
			console.error('Refresh token failed', err)
			setUser(null)
			return false
		}
	}

	// 🔹 Check auth status (called on mount & retry after refresh)
	const checkAuthStatus = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/profile`, {
				method: 'GET',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
			})

			const data = await response.json()

			if (response.ok && data.success && data.data?.user) {
				setUser(data.data.user)
			} else if (data.message === 'jwt expired') {
				console.log('JWT expired, refreshing token...')
				const refreshed = await refreshToken()
				if (refreshed) {
					console.log('Retrying profile fetch...')
					await checkAuthStatus()
				}
			} else {
				console.error('Auth check failed:', data.message)
			}
		} catch (error) {
			console.error('Network error during auth check:', error)
		} finally {
			setLoading(false)
		}
	}

	// 🔹 Login
	const login = async (email: string, password: string) => {
		setLoading(true)
		setError(null)

		try {
			const response = await fetch(`${API_BASE_URL}/auth/login`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			})

			const data = await response.json()
			if (!response.ok) throw new Error(data.message || 'Login failed')

			if (data.data?.refreshToken) {
				localStorage.setItem('refreshToken', data.data.refreshToken)
				await checkAuthStatus()
			} else throw new Error(data.message || 'Login failed')
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Login failed'
			setError(errorMessage)
			throw new Error(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	// 🔹 Register
	const register = async (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		confirmPassword: string,
	) => {
		setLoading(true)
		setError(null)
		try {
			const response = await fetch(`${API_BASE_URL}/auth/signup`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
					confirmPassword,
					acceptTerms: true,
				}),
			})

			const data = await response.json()
			if (!response.ok) throw new Error(data.message || 'Registration failed')
			if (data.success)
				setError(
					'Registration successful! Please check your email to verify your account.',
				)
			else throw new Error(data.message || 'Registration failed')
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Registration failed'
			setError(errorMessage)
			throw new Error(errorMessage)
		} finally {
			setLoading(false)
		}
	}

	// 🔹 Logout
	const logout = async () => {
		try {
			await fetch(`${API_BASE_URL}/auth/logout`, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({}),
			})
		} catch (error) {
			console.error('Logout error:', error)
		} finally {
			localStorage.removeItem('refreshToken')
			setUser(null)
			setError(null)
		}
	}

	// 🔹 Update User
	const updateUser = async (updatedData: FormData): Promise<void> => {
		if (!user) return

		try {
			const response = await fetch(`${API_BASE_URL}/auth/update/${user._id}`, {
				method: 'PATCH',
				credentials: 'include',
				body: updatedData,
			})

			const data = await response.json()

			if (response.ok && data.success) {
				setUser(data.data.user)
			} else {
				throw new Error(data.message || 'Failed to update user')
			}
		} catch (err) {
			console.error(err)
			throw err
		}
	}

	// 🔹 Show loading spinner while checking auth
	// if (loading) {
	// 	return (
	// 		<div className="flex items-center justify-center min-h-screen">
	// 			<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
	// 		</div>
	// 	)
	// }

	return (
		<AuthContext.Provider
			value={{ user, login, register, logout, updateUser, loading, error }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	const context = useContext(AuthContext)
	if (context === undefined)
		throw new Error('useAuth must be used within an AuthProvider')
	return context
}
