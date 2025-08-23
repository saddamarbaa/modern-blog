'use client'

import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import Link from 'next/link'
import {
	Mail,
	Lock,
	User,
	Eye,
	EyeOff,
	UserPlus,
	ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from '@/components/ui/card'
import { useAuth } from '@/contexts/auth-context'
import { registerSchema, RegisterSchema } from '@/lib'
import { Label } from '@/components/ui/label'

export function RegisterForm() {
	const router = useRouter()
	const { register: registerUser, loading } = useAuth()
	const [serverError, setServerError] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirm, setShowConfirm] = useState(false)

	const form = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
	})

	const onSubmit = async (values: RegisterSchema) => {
		setServerError('')
		try {
			await registerUser(
				values.firstName,
				values.lastName,
				values.email,
				values.password,
				values.confirmPassword,
			)
			router.push('/login')
		} catch (err: unknown) {
			let message = 'Registration failed. Please try again.'
			if (err instanceof Error) message = err.message
			setServerError(message)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 p-4">
			<div className="w-full max-w-md">
				<Card className="backdrop-blur-sm bg-white/80 border-0 shadow-2xl shadow-emerald-500/10 animate-float">
					<CardHeader className="space-y-3 pb-8 text-center">
						<div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center mb-4">
							<UserPlus className="h-8 w-8 text-white" />
						</div>
						<CardTitle className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
							Create Account
						</CardTitle>
						<CardDescription className="text-gray-600 text-base">
							Join TechInsight community today
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
							{/* First Name */}
							<div className="space-y-2">
								<Label
									htmlFor="firstName"
									className="text-sm font-semibold text-gray-700">
									First Name
								</Label>
								<div className="relative group">
									<User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
									<Input
										id="firstName"
										placeholder="Enter your first name"
										className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white/50"
										{...form.register('firstName')}
									/>
								</div>
								{form.formState.errors.firstName && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.firstName.message}
									</p>
								)}
							</div>

							{/* Last Name */}
							<div className="space-y-2">
								<Label
									htmlFor="lastName"
									className="text-sm font-semibold text-gray-700">
									Last Name
								</Label>
								<div className="relative group">
									<User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
									<Input
										id="lastName"
										placeholder="Enter your last name"
										className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white/50"
										{...form.register('lastName')}
									/>
								</div>
								{form.formState.errors.lastName && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.lastName.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div className="space-y-2">
								<Label
									htmlFor="email"
									className="text-sm font-semibold text-gray-700">
									Email
								</Label>
								<div className="relative group">
									<Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
									<Input
										id="email"
										type="email"
										placeholder="Enter your email"
										className="pl-12 h-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white/50"
										{...form.register('email')}
									/>
								</div>
								{form.formState.errors.email && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.email.message}
									</p>
								)}
							</div>

							{/* Password */}
							<div className="space-y-2">
								<Label
									htmlFor="password"
									className="text-sm font-semibold text-gray-700">
									Password
								</Label>
								<div className="relative group">
									<Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
									<Input
										id="password"
										type={showPassword ? 'text' : 'password'}
										placeholder="Create a password"
										className="pl-12 pr-12 h-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white/50"
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

							{/* Confirm Password */}
							<div className="space-y-2">
								<Label
									htmlFor="confirmPassword"
									className="text-sm font-semibold text-gray-700">
									Confirm Password
								</Label>
								<div className="relative group">
									<Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-emerald-500 transition-colors" />
									<Input
										id="confirmPassword"
										type={showConfirm ? 'text' : 'password'}
										placeholder="Confirm your password"
										className="pl-12 pr-12 h-12 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all duration-200 bg-white/50"
										{...form.register('confirmPassword')}
									/>
									<Button
										type="button"
										variant="ghost"
										size="icon"
										className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 hover:bg-gray-100 rounded-lg transition-colors"
										onClick={() => setShowConfirm(!showConfirm)}>
										{showConfirm ? (
											<EyeOff className="h-4 w-4 text-gray-500" />
										) : (
											<Eye className="h-4 w-4 text-gray-500" />
										)}
									</Button>
								</div>
								{form.formState.errors.confirmPassword && (
									<p className="text-red-600 text-sm">
										{form.formState.errors.confirmPassword.message}
									</p>
								)}
							</div>

							{/* Server Error */}
							{serverError && (
								<div className="text-sm text-red-700 bg-red-50 border border-red-200 p-4 rounded-xl">
									{serverError}
								</div>
							)}

							{/* Submit Button */}
							<Button
								type="submit"
								className="w-full h-12 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
								disabled={loading}>
								{loading ? (
									<div className="flex items-center space-x-2">
										<div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
										<span>Creating account...</span>
									</div>
								) : (
									<div className="flex items-center justify-center space-x-2">
										<span>Create account</span>
										<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
									</div>
								)}
							</Button>
						</form>

						<div className="pt-6 border-t border-gray-200 text-center text-sm">
							<span className="text-gray-600">Already have an account? </span>
							<Link
								href="/login"
								className="text-emerald-600 hover:text-emerald-700 font-semibold hover:underline">
								Sign in
							</Link>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}
