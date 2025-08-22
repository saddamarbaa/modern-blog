import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const developmentPosts = [
	{
		id: 1,
		title: 'Node.js Performance Optimization',
		excerpt:
			'Learn advanced techniques to boost your Node.js application performance and handle high traffic loads.',
		author: 'David Kim',
		date: 'Dec 14, 2024',
		category: 'Node.js',
		readTime: '10 min read',
		slug: 'nodejs-performance-optimization',
		image: '/nodejs-performance-dashboard.png',
	},
	{
		id: 2,
		title: 'TypeScript Best Practices 2024',
		excerpt:
			'Essential TypeScript patterns and practices every developer should know for writing maintainable code.',
		author: 'Lisa Wang',
		date: 'Dec 11, 2024',
		category: 'TypeScript',
		readTime: '7 min read',
		slug: 'typescript-best-practices-2024',
		image: '/react-typescript-editor.png',
	},
	{
		id: 3,
		title: 'Testing JavaScript Applications',
		excerpt:
			'Comprehensive guide to testing strategies, tools, and best practices for JavaScript applications.',
		author: 'Alex Thompson',
		date: 'Dec 8, 2024',
		category: 'Testing',
		readTime: '15 min read',
		slug: 'testing-javascript-applications',
		image: '/javascript-code-coverage.png',
	},
]

export default function DevelopmentPage() {
	return (
		<div className="bg-background min-h-screen">
			<BlogHeader />

			<main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
				<div className="mb-12">
					<h1 className="mb-4 font-bold text-foreground text-4xl">
						Development
					</h1>
					<p className="text-muted-foreground text-xl">
						Deep dive into development practices, tools, and methodologies that
						make great software.
					</p>
				</div>

				<div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
					{developmentPosts.map((post) => (
						<Card
							key={post.id}
							className="group hover:shadow-lg transition-shadow">
							<div className="rounded-t-lg aspect-video overflow-hidden">
								<img
									src={post.image || '/placeholder.svg'}
									alt={post.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<CardHeader>
								<div className="flex justify-between items-center mb-2">
									<Badge variant="secondary">{post.category}</Badge>
									<span className="text-muted-foreground text-sm">
										{post.readTime}
									</span>
								</div>
								<CardTitle className="group-hover:text-accent transition-colors">
									<Link href={`/blog/${post.slug}`}>{post.title}</Link>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="mb-4 text-muted-foreground">{post.excerpt}</p>
								<div className="flex justify-between items-center">
									<div className="flex items-center space-x-4 text-muted-foreground text-sm">
										<div className="flex items-center space-x-1">
											<User className="w-4 h-4" />
											<span>{post.author}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Calendar className="w-4 h-4" />
											<span>{post.date}</span>
										</div>
									</div>
									<Link
										href={`/blog/${post.slug}`}
										className="flex items-center space-x-1 text-accent hover:text-accent/80 transition-colors">
										<span>Read</span>
										<ArrowRight className="w-4 h-4" />
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</main>

			<BlogFooter />
		</div>
	)
}
