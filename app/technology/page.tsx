import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const technologyPosts = [
	{
		id: 1,
		title: 'The Future of AI in Web Development',
		excerpt:
			'Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications.',
		author: 'Sarah Chen',
		date: 'Dec 15, 2024',
		category: 'AI',
		readTime: '8 min read',
		slug: 'future-ai-web-development',
		image: '/ai-web-dev-interface.png',
	},
	{
		id: 2,
		title: 'Building Scalable React Applications',
		excerpt:
			'Best practices and architectural patterns for creating React apps that can grow with your business.',
		author: 'Mike Johnson',
		date: 'Dec 12, 2024',
		category: 'React',
		readTime: '12 min read',
		slug: 'scalable-react-applications',
		image: '/react-typescript-editor.png',
	},
	{
		id: 3,
		title: 'Modern CSS Grid Layouts',
		excerpt:
			'Master CSS Grid to create complex, responsive layouts with clean and maintainable code.',
		author: 'Emily Rodriguez',
		date: 'Dec 10, 2024',
		category: 'CSS',
		readTime: '6 min read',
		slug: 'modern-css-grid-layouts',
		image: '/css-grid-layout.png',
	},
]

export default function TechnologyPage() {
	return (
		<div className="min-h-screen bg-background">
			<BlogHeader />

			<main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="mb-12">
					<h1 className="text-4xl font-bold text-foreground mb-4">
						Technology
					</h1>
					<p className="text-xl text-muted-foreground">
						Discover the latest trends and innovations in technology that are
						shaping our digital future.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{technologyPosts.map((post) => (
						<Card
							key={post.id}
							className="group hover:shadow-lg transition-shadow">
							<div className="aspect-video overflow-hidden rounded-t-lg">
								<img
									src={post.image || '/placeholder.svg'}
									alt={post.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
								/>
							</div>
							<CardHeader>
								<div className="flex items-center justify-between mb-2">
									<Badge variant="secondary">{post.category}</Badge>
									<span className="text-sm text-muted-foreground">
										{post.readTime}
									</span>
								</div>
								<CardTitle className="group-hover:text-accent transition-colors">
									<Link href={`/blog/${post.slug}`}>{post.title}</Link>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">{post.excerpt}</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center space-x-4 text-sm text-muted-foreground">
										<div className="flex items-center space-x-1">
											<User className="h-4 w-4" />
											<span>{post.author}</span>
										</div>
										<div className="flex items-center space-x-1">
											<Calendar className="h-4 w-4" />
											<span>{post.date}</span>
										</div>
									</div>
									<Link
										href={`/blog/${post.slug}`}
										className="text-accent hover:text-accent/80 transition-colors flex items-center space-x-1">
										<span>Read</span>
										<ArrowRight className="h-4 w-4" />
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	)
}
