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
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		checkAuthStatus()
	}, [])

	const checkAuthStatus = async () => {
		try {
			const response = await fetch(`${API_BASE_URL}/auth/profile`, {
				method: 'GET',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
			})

			if (response.ok) {
				const data = await response.json()
				if (data.success && data.data?.user) {
					setUser(data.data.user)
				}
			}
		} catch (error) {
			console.error('Auth check failed:', error)
		} finally {
			setLoading(false)
		}
	}

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
			if (data.success) await checkAuthStatus()
			else throw new Error(data.message || 'Login failed')
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Login failed'
			setError(errorMessage)
			throw new Error(errorMessage)
		} finally {
			setLoading(false)
		}
	}

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
			setUser(null)
			setError(null)
		}
	}

	const updateUser = async (updatedData: FormData): Promise<void> => {
		if (!user) return

		try {
			const response = await fetch(`${API_BASE_URL}/auth/update/${user._id}`, {
				method: 'PATCH',
				credentials: 'include',
				body: updatedData, // FormData is sent directly
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
