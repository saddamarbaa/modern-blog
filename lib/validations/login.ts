import * as zod from 'zod'

export const loginSchema = zod.object({
	email: zod.string().email('Please enter a valid email address'),
	password: zod.string().min(6, 'Password must be at least 6 characters long'),
})

export type LoginSchema = zod.infer<typeof loginSchema>
