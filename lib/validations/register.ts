// src/lib/validations/signup.ts
import * as z from 'zod'

export const registerScheTem = z
	.object({
		firstName: z
			.string()
			.min(3, 'First name must be at least 3 characters long')
			.max(15, 'First name must not exceed 15 characters'),
		lastName: z
			.string()
			.min(3, 'Last name must be at least 3 characters long')
			.max(15, 'Last name must not exceed 15 characters'),
		email: z.string().email('Please enter a valid email address'),
		password: z.string().min(6, 'Password must be at least 6 characters long'),
		confirmPassword: z.string(),
		bio: z
			.string()
			.max(500, "Bio can't be longer than 500 characters")
			.optional(),
		skills: z.array(z.string()).optional(),
		profileUrl: z.string().url('Please provide a valid URL').optional(),
		acceptTerms: z.boolean().refine((val) => val === true, {
			message: 'You must accept the terms',
		}),
		phoneNumber: z
			.string()
			.regex(/^\+?[1-9]\d{1,14}$/, 'Please provide a valid phone number')
			.optional(),
		gender: z.enum(['male', 'female', 'other']).optional(),
		userAward: z.string().optional(),
		plan: z.string().optional(),
		dateOfBirth: z.coerce.date().optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Confirm password must match password',
	})

// src/lib/validations/register.ts

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(3, 'First name must be at least 3 characters long')
			.max(15, 'First name must not exceed 15 characters'),
		lastName: z
			.string()
			.min(3, 'Last name must be at least 3 characters long')
			.max(15, 'Last name must not exceed 15 characters'),
		email: z.string().email('Please enter a valid email address'),
		password: z.string().min(6, 'Password must be at least 6 characters'),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Passwords do not match',
	})

export type RegisterSchema = z.infer<typeof registerSchema>
