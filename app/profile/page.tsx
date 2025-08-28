'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { toast } from 'sonner'
import LoadingScreen from '@/components/ui/LoadingScreen'

export default function ProfilePage() {
	const { user, loading, updateUser } = useAuth()
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState<any>(user || {})
	const [serverError, setServerError] = useState('')
	const [selectedFile, setSelectedFile] = useState<File | null>(null)

	useEffect(() => {
		if (user) setFormData(user)
	}, [user])

	// show loader while checking auth
	if (loading) return <LoadingScreen />

	if (!user)
		return (
			<div className="flex flex-col items-center justify-center py-20">
				<p className="mb-4 text-gray-600">You are not signed in.</p>
				<Button asChild>
					<a href="/login">Sign in</a>
				</Button>
			</div>
		)

	// Handles text input and textarea changes
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	// Handles file input change
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setSelectedFile(e.target.files[0])
		}
	}

	// Save updated profile
	const handleSave = async () => {
		setServerError('')
		try {
			const form = new FormData()

			// Append only changed fields
			Object.keys(formData).forEach((key) => {
				if (formData[key] !== (user as Record<string, any>)[key]) {
					form.append(key, formData[key])
				}
			})

			// Append file if selected
			if (selectedFile) {
				form.append('profileImage', selectedFile)
			}

			await updateUser(form) // Backend expects FormData
			toast.success('Profile updated successfully!')
			setIsEditing(false)
			setSelectedFile(null)
		} catch (err: unknown) {
			console.error(err)
			let message = 'Failed to update profile'
			if (err instanceof Error) message = err.message
			setServerError(message)
		}
	}

	const renderField = (
		label: string,
		name: string,
		value: any,
		type: 'input' | 'textarea' | 'select' = 'input',
	) => {
		if (!isEditing && (value === null || value === undefined || value === ''))
			return null

		const inputClass =
			'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full'

		return (
			<div className="flex flex-col">
				<p className="text-sm text-gray-500 mb-1">{label}</p>
				{isEditing ? (
					type === 'input' ? (
						<Input
							name={name}
							value={value || ''}
							onChange={handleChange}
							className={inputClass}
						/>
					) : type === 'textarea' ? (
						<Textarea
							name={name}
							value={value || ''}
							onChange={handleChange}
							className={inputClass}
							rows={3}
						/>
					) : (
						<Select
							value={value || ''}
							onValueChange={(val) =>
								setFormData({ ...formData, [name]: val })
							}>
							<SelectTrigger className={inputClass}>
								<SelectValue placeholder="Select gender" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="male">Male</SelectItem>
								<SelectItem value="female">Female</SelectItem>
								<SelectItem value="other">Other</SelectItem>
							</SelectContent>
						</Select>
					)
				) : (
					<p className="font-medium break-words">{value || 'N/A'}</p>
				)}
			</div>
		)
	}

	return (
		<div className="max-w-3xl mx-auto py-10">
			<Card className="shadow-xl rounded-2xl border border-gray-200">
				<CardHeader className="flex flex-col items-center mb-6">
					<Avatar className="h-24 w-24 mb-4">
						<AvatarImage
							src={
								selectedFile
									? URL.createObjectURL(selectedFile)
									: formData.profileUrl || '/placeholder.svg'
							}
							alt={formData.firstName + ' ' + formData.lastName}
						/>
						<AvatarFallback>
							{(formData.firstName?.[0] || '') + (formData.lastName?.[0] || '')}
						</AvatarFallback>
					</Avatar>
					<CardTitle className="text-2xl font-semibold">
						{formData.firstName} {formData.lastName}
					</CardTitle>
					{formData.email && (
						<p className="text-sm text-gray-500">{formData.email}</p>
					)}
				</CardHeader>

				<CardContent className="space-y-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{renderField('First Name', 'firstName', formData.firstName)}
						{renderField('Last Name', 'lastName', formData.lastName)}
						{renderField('Email', 'email', formData.email)}
						{renderField('Gender', 'gender', formData.gender, 'select')}
						{renderField('Bio', 'bio', formData.bio, 'textarea')}

						{/* Profile Image */}
						{isEditing && (
							<div className="flex flex-col col-span-full">
								<p className="text-sm text-gray-500 mb-1">Profile Image</p>
								<Input
									type="text"
									placeholder="Paste image URL"
									name="profileUrl"
									value={formData.profileUrl || ''}
									onChange={handleChange}
									className="border border-gray-300 rounded-md p-2 w-full mb-2"
								/>
								<p className="text-sm text-gray-500 mb-1">Or upload a file</p>
								<Input
									type="file"
									accept="image/*"
									onChange={handleFileChange}
									className="border border-gray-300 rounded-md p-2 w-full"
								/>
							</div>
						)}

						{!isEditing && formData.profileUrl && (
							<div className="col-span-full break-words font-medium text-gray-700">
								{formData.profileUrl}
							</div>
						)}
					</div>

					{serverError && (
						<div className="text-red-700 bg-red-50 border border-red-200 p-4 rounded-md">
							{serverError}
						</div>
					)}

					<div className="flex justify-end space-x-3 pt-6">
						{isEditing ? (
							<>
								<Button
									variant="outline"
									onClick={() => {
										setIsEditing(false)
										setSelectedFile(null)
									}}>
									Cancel
								</Button>
								<Button onClick={handleSave}>Save Changes</Button>
							</>
						) : (
							<Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
						)}
					</div>
				</CardContent>
			</Card>
		</div>
	)
}
