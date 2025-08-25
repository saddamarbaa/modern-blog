'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/auth-context'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export default function ProfilePage() {
	const { user, loading, updateUser } = useAuth()
	const [isEditing, setIsEditing] = useState(false)
	const [formData, setFormData] = useState<any>(user || {})

	useEffect(() => {
		if (user) setFormData(user)
	}, [user])

	if (loading)
		return (
			<div className="flex flex-col items-center justify-center py-20">
				<p className="text-gray-600">Loading profile...</p>
			</div>
		)

	if (!user)
		return (
			<div className="flex flex-col items-center justify-center py-20">
				<p className="mb-4 text-gray-600">You are not signed in.</p>
				<Button asChild>
					<a href="/login">Sign in</a>
				</Button>
			</div>
		)

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSave = async () => {
		try {
			await updateUser({
				firstName: formData.firstName,
				lastName: formData.lastName,
				email: formData.email,
				gender: formData.gender,
				phoneNumber: formData.phoneNumber,
				acceptTerms: formData.acceptTerms,
				bio: formData.bio,
				profileUrl: formData.profileUrl,
				skills: formData.skills,
			})
			toast.success('Profile updated successfully!')
			setIsEditing(false)
		} catch (err) {
			console.error(err)
			toast.error('Failed to update profile')
		}
	}

	const renderField = (
		label: string,
		name: string,
		value: any,
		type: 'input' | 'textarea' = 'input',
	) => {
		if (!isEditing && (value === null || value === undefined || value === ''))
			return null

		const inputClass =
			'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-400 w-full'

		return (
			<div>
				<p className="text-sm text-gray-500 mb-1">{label}</p>
				{isEditing ? (
					type === 'input' ? (
						<Input
							name={name}
							value={value || ''}
							onChange={handleChange}
							className={inputClass}
						/>
					) : (
						<Textarea
							name={name}
							value={value || ''}
							onChange={handleChange}
							className={inputClass}
						/>
					)
				) : (
					<p className="font-medium">{value || 'N/A'}</p>
				)}
			</div>
		)
	}

	return (
		<div className="max-w-3xl mx-auto py-10">
			<Card className="shadow-lg rounded-2xl border">
				<CardHeader className="flex flex-col items-center">
					<Avatar className="h-24 w-24 mb-4">
						<AvatarImage
							src={formData.profileUrl || '/placeholder.svg'}
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
					<div className="grid grid-cols-2 gap-6">
						{renderField('First Name', 'firstName', formData.firstName)}
						{renderField('Last Name', 'lastName', formData.lastName)}
						{renderField('Email', 'email', formData.email)}
						{renderField('Phone Number', 'phoneNumber', formData.phoneNumber)}
						{renderField('Gender', 'gender', formData.gender)}
						{renderField('Bio', 'bio', formData.bio, 'textarea')}
						{renderField('Profile URL', 'profileUrl', formData.profileUrl)}
					</div>

					<div className="flex justify-end space-x-3 pt-6">
						{isEditing ? (
							<>
								<Button variant="outline" onClick={() => setIsEditing(false)}>
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
