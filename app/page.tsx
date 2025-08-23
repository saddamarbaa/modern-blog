import { BlogHeader } from '@/components/blog-header'
import { FeaturedPost } from '@/components/featured-post'
import { BlogGrid } from '@/components/blog-grid'
import { BlogSidebar } from '@/components/blog-sidebar'
import { BlogFooter } from '@/components/blog-footer'

export default function HomePage() {
	return (
		<div className="flex flex-col bg-gradient-to-br from-background via-background to-muted/20 min-h-screen">
			<main className="flex-1">
				<FeaturedPost />

				<div className="mx-auto px-4 sm:px-6 lg:px-8 py-12 container">
					<div className="gap-12 grid grid-cols-1 lg:grid-cols-4">
						<div className="lg:col-span-3">
							<BlogGrid />
						</div>
						<div className="lg:col-span-1">
							<div className="top-8 sticky">
								<BlogSidebar />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
