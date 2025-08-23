'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/contexts/auth-context'
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

/* Zod schema for login validation */
const loginSchema = z.object({
	email: z.string().email('Please enter a valid email'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormValues = z.infer<typeof loginSchema>

export function LoginForm() {
	const router = useRouter()
	const { login, loading } = useAuth()
	const [showPassword, setShowPassword] = useState(false)
	const [serverError, setServerError] = useState('')

	const form = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	const onSubmit = async (values: LoginFormValues) => {
		setServerError('')
		try {
			await login(values.email, values.password)
			router.push('/dashboard')
		} catch (err: any) {
			const messageFromAPI = err?.message || 'Invalid email or password'
			setServerError(messageFromAPI)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
			<div className="w-full max-w-md">
				<Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl shadow-blue-500/10 animate-float">
					<CardHeader className="space-y-3 pb-8">
						<div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
							<Lock className="h-8 w-8 text-white" />
						</div>
						<CardTitle className="text-3xl font-bold text-center bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
							Welcome back
						</CardTitle>
						<CardDescription className="text-center text-gray-600 text-base">
							Sign in to your TechInsight account
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
							{/* Email Field */}
							<div className="space-y-2">
								<Label
									htmlFor="email"
									className="text-sm font-semibold text-gray-700">
									Email
								</Label>
								<div className="relative group">
									<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
										className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 bg-white/50"
										{...form.register('email')}
									/>
								</div>
								{form.formState.errors.email && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.email.message}
									</p>
								)}
							</div>

							{/* Password Field */}
							<div className="space-y-2">
								<Label
									htmlFor="password"
									className="text-sm font-semibold text-gray-700">
									Password
								</Label>
								<div className="relative group">
									<Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
									<Input
										id="password"
										type={showPassword ? 'text' : 'password'}
										placeholder="Enter your password"
										className="pl-12 pr-12 h-12 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 bg-white/50"
										{...form.register('password')}
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-lg transition-colors"
										onClick={() => setShowPassword(!showPassword)}>
										{showPassword ? (
											<EyeOff className="h-4 w-4 text-gray-500" />
										) : (
											<Eye className="h-4 w-4 text-gray-500" />
										)}
									</Button>
								</div>
								{form.formState.errors.password && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.password.message}
									</p>
								)}
							</div>

							{/* Server Error */}
							{serverError && (
								<div className="text-sm text-red-700 bg-red-50 border border-red-200 p-4 rounded-xl flex items-center space-x-2">
									<div className="w-2 h-2 bg-red-500 rounded-full"></div>
									<span>{serverError}</span>
								</div>
							)}

							{/* Submit Button */}
							<Button
								type="submit"
								className="w-full h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
								disabled={loading}>
								{loading ? (
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
										<span>Signing in...</span>
									</div>
								) : (
									<div className="flex items-center justify-center space-x-2">
										<span>Sign in</span>
										<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</div>
								)}
							</Button>
						</form>

						<div className="pt-6 border-t border-gray-200 text-center text-sm">
							<span className="text-gray-600">Don't have an account? </span>
							<Link
								href="/register"
								className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-colors">
								Sign up
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
