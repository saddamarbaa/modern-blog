import type React from 'react'
import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/contexts/auth-context'
import { ThemeProvider } from '@/contexts/theme-context'
import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'

const dmSans = DM_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-sans',
})

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-heading',
})

export const metadata: Metadata = {
	title: 'Modern Blog - Insights & Stories',
	description:
		'A modern blog featuring the latest insights, stories, and ideas from our community of writers.',
	generator: 'v0.app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
			<body>
				<ThemeProvider>
					<AuthProvider>
						<BlogHeader />
						{children}
					</AuthProvider>

					<BlogFooter />
				</ThemeProvider>
			</body>
		</html>
	)
}
