import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Eye, Heart } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    slug: "mastering-react-server-components",
    title: "Mastering React Server Components in Next.js 15",
    excerpt:
      "Deep dive into React Server Components and how they're revolutionizing full-stack development with improved performance and developer experience.",
    author: "Sarah Johnson",
    date: "Dec 16, 2024",
    readTime: "12 min read",
    image: "/react-typescript-editor.png",
    category: "React",
    views: "2.4k",
    likes: 156,
    featured: false,
  },
  {
    id: 2,
    slug: "advanced-css-grid-techniques",
    title: "Advanced CSS Grid Techniques for Modern Layouts",
    excerpt:
      "Master complex grid layouts with subgrid, container queries, and advanced positioning techniques that will elevate your web designs.",
    author: "Michael Rodriguez",
    date: "Dec 14, 2024",
    readTime: "10 min read",
    image: "/css-grid-layout.png",
    category: "CSS",
    views: "1.8k",
    likes: 89,
    featured: true,
  },
  {
    id: 3,
    slug: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization: From Basics to Advanced",
    excerpt:
      "Learn proven strategies to optimize your Node.js applications, including memory management, async patterns, and monitoring techniques.",
    author: "Emma Wilson",
    date: "Dec 12, 2024",
    readTime: "15 min read",
    image: "/nodejs-performance-dashboard.png",
    category: "Node.js",
    views: "3.1k",
    likes: 203,
    featured: false,
  },
  {
    id: 4,
    slug: "javascript-testing",
    title: "JavaScript Testing: Achieving 100% Code Coverage",
    excerpt:
      "Comprehensive guide to testing strategies, tools, and best practices for maintaining high-quality JavaScript codebases.",
    author: "David Kumar",
    date: "Dec 10, 2024",
    readTime: "11 min read",
    image: "/javascript-code-coverage.png",
    category: "Testing",
    views: "1.5k",
    likes: 67,
    featured: false,
  },
  {
    id: 5,
    slug: "docker-for-developers",
    title: "Docker for Developers: Containerizing Your Development Workflow",
    excerpt:
      "Streamline your development process with Docker containers, from local development to production deployment strategies.",
    author: "Lisa Park",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    image: "/docker-containers-development.png",
    category: "DevOps",
    views: "2.7k",
    likes: 134,
    featured: false,
  },
  {
    id: 6,
    slug: "graphql-vs-rest",
    title: "GraphQL vs REST: Making the Right Choice in 2024",
    excerpt:
      "Compare GraphQL and REST APIs with real-world examples, performance considerations, and implementation best practices.",
    author: "Rachel Green",
    date: "Dec 6, 2024",
    readTime: "13 min read",
    image: "/graphql-vs-rest-api.png",
    category: "API",
    views: "1.9k",
    likes: 98,
    featured: false,
  },
  {
    id: 7,
    slug: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns: Generic Constraints and Conditional Types",
    excerpt:
      "Master advanced TypeScript features including mapped types, template literals, and complex generic patterns for type-safe applications.",
    author: "James Mitchell",
    date: "Dec 4, 2024",
    readTime: "14 min read",
    image: "/typescript-advanced-patterns.png",
    category: "TypeScript",
    views: "2.2k",
    likes: 178,
    featured: true,
  },
  {
    id: 8,
    slug: "web-accessibility-guide",
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    excerpt:
      "Complete guide to web accessibility standards, ARIA patterns, and testing strategies for creating inclusive web applications.",
    author: "Maria Santos",
    date: "Dec 2, 2024",
    readTime: "16 min read",
    image: "/web-accessibility-inclusive-design.png",
    category: "Accessibility",
    views: "1.6k",
    likes: 112,
    featured: false,
  },
  {
    id: 9,
    slug: "micro-frontends-architecture",
    title: "Micro-Frontends: Scaling Frontend Architecture for Large Teams",
    excerpt:
      "Explore micro-frontend patterns, module federation, and strategies for building scalable frontend architectures in enterprise environments.",
    author: "Kevin Zhang",
    date: "Nov 30, 2024",
    readTime: "18 min read",
    image: "/micro-frontends-architecture.png",
    category: "Architecture",
    views: "2.8k",
    likes: 195,
    featured: false,
  },
  {
    id: 10,
    slug: "serverless-functions-guide",
    title: "Serverless Functions: From Zero to Production",
    excerpt:
      "Master serverless computing with practical examples, deployment strategies, and performance optimization techniques for modern applications.",
    author: "Anna Kowalski",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    image: "/serverless-cloud.png",
    category: "Serverless",
    views: "2.1k",
    likes: 143,
    featured: false,
  },
  {
    id: 11,
    slug: "web-performance-optimization",
    title: "Web Performance Optimization: Core Web Vitals and Beyond",
    excerpt:
      "Comprehensive guide to improving website performance, from image optimization to code splitting and caching strategies.",
    author: "Tom Anderson",
    date: "Nov 26, 2024",
    readTime: "15 min read",
    image: "/web-performance-metrics.png",
    category: "Performance",
    views: "3.4k",
    likes: 267,
    featured: true,
  },
  {
    id: 12,
    slug: "progressive-web-apps",
    title: "Progressive Web Apps: Native-Like Experiences on the Web",
    excerpt:
      "Build PWAs with service workers, offline functionality, and native app features using modern web technologies.",
    author: "Sophie Laurent",
    date: "Nov 24, 2024",
    readTime: "13 min read",
    image: "/pwa-mobile-interface.png",
    category: "PWA",
    views: "1.7k",
    likes: 89,
    featured: false,
  },
]

export function BlogGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Latest Tech Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay ahead of the curve with in-depth tutorials, industry insights, and practical development guides.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-0 shadow-md bg-card/50 backdrop-blur-sm"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {post.featured && (
                    <Badge className="absolute top-3 left-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="text-xs font-medium">
                    {post.category}
                  </Badge>
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{post.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{post.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="group/btn hover:bg-emerald-50 hover:text-emerald-600">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8 py-3"
          >
            Load More Articles
          </Button>
          <p className="text-sm text-muted-foreground mt-3">Showing 12 of 50+ articles</p>
        </div>
      </div>
    </section>
  )
}
