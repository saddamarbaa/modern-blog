import { BlogHeader } from '@/components/blog-header'
import { BlogFooter } from '@/components/blog-footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Users, Target, Award } from 'lucide-react'

export default function AboutPage() {
	return (
		<main className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
			<div className="mx-auto max-w-4xl">
				<div className="mb-12 text-center">
					<div className="flex justify-center mb-6">
						<BookOpen className="w-16 h-16 text-accent" />
					</div>
					<h1 className="mb-4 font-bold text-foreground text-4xl">
						About TechInsight
					</h1>
					<p className="text-muted-foreground text-xl">
						Your trusted source for cutting-edge technology insights and
						development expertise.
					</p>
				</div>

				<div className="gap-8 grid md:grid-cols-2 mb-12">
					<Card>
						<CardHeader>
							<div className="flex items-center space-x-2 mb-2">
								<Target className="w-6 h-6 text-accent" />
								<CardTitle>Our Mission</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								To empower developers and tech enthusiasts with practical
								insights, cutting-edge tutorials, and industry best practices
								that drive innovation and professional growth in the rapidly
								evolving tech landscape.
							</p>
						</CardContent>
					</Card>

					<Card>
						<CardHeader>
							<div className="flex items-center space-x-2 mb-2">
								<Users className="w-6 h-6 text-accent" />
								<CardTitle>Our Community</CardTitle>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">
								Join thousands of developers, designers, and tech leaders who
								rely on TechInsight for the latest trends, practical tutorials,
								and expert analysis of emerging technologies and development
								methodologies.
							</p>
						</CardContent>
					</Card>
				</div>

				<div className="bg-muted/50 mb-12 p-8 rounded-lg">
					<h2 className="mb-6 font-bold text-foreground text-2xl text-center">
						What We Cover
					</h2>
					<div className="gap-4 grid md:grid-cols-3">
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								Frontend
							</Badge>
							<p className="text-muted-foreground text-sm">
								React, Vue, Angular, CSS, JavaScript
							</p>
						</div>
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								Backend
							</Badge>
							<p className="text-muted-foreground text-sm">
								Node.js, Python, APIs, Databases
							</p>
						</div>
						<div className="text-center">
							<Badge variant="secondary" className="mb-2">
								DevOps
							</Badge>
							<p className="text-muted-foreground text-sm">
								CI/CD, Cloud, Docker, Monitoring
							</p>
						</div>
					</div>
				</div>

				<Card>
					<CardHeader>
						<div className="flex items-center space-x-2 mb-2">
							<Award className="w-6 h-6 text-accent" />
							<CardTitle>Why Choose TechInsight?</CardTitle>
						</div>
					</CardHeader>
					<CardContent>
						<div className="gap-4 grid md:grid-cols-2">
							<div>
								<h3 className="mb-2 font-semibold text-foreground">
									Expert Authors
								</h3>
								<p className="text-muted-foreground text-sm">
									Content created by industry professionals with real-world
									experience.
								</p>
							</div>
							<div>
								<h3 className="mb-2 font-semibold text-foreground">
									Practical Focus
								</h3>
								<p className="text-muted-foreground text-sm">
									Tutorials and insights you can immediately apply to your
									projects.
								</p>
							</div>
							<div>
								<h3 className="mb-2 font-semibold text-foreground">
									Latest Trends
								</h3>
								<p className="text-muted-foreground text-sm">
									Stay ahead with coverage of emerging technologies and best
									practices.
								</p>
							</div>
							<div>
								<h3 className="mb-2 font-semibold text-foreground">
									Community Driven
								</h3>
								<p className="text-muted-foreground text-sm">
									Engaging discussions and knowledge sharing among tech
									professionals.
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</main>
	)
}
