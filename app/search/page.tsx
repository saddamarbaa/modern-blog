"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Calendar, Clock, ArrowLeft } from "lucide-react"

// Mock blog posts data for search
const allPosts = [
  {
    slug: "react-18-concurrent-features",
    title: "React 18 Concurrent Features: A Deep Dive",
    excerpt:
      "Explore the revolutionary concurrent features in React 18 including automatic batching, transitions, and Suspense improvements.",
    content:
      "React 18 introduces groundbreaking concurrent features that fundamentally change how React applications handle user interactions and data fetching...",
    author: "Sarah Chen",
    date: "Dec 18, 2024",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "JavaScript", "Performance"],
    image: "/react-typescript-editor.png",
  },
  {
    slug: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization Techniques",
    excerpt: "Learn advanced techniques to optimize your Node.js applications for better performance and scalability.",
    content:
      "Performance optimization in Node.js requires understanding the event loop, memory management, and efficient coding patterns...",
    author: "Mike Rodriguez",
    date: "Dec 16, 2024",
    readTime: "12 min read",
    category: "Node.js",
    tags: ["Node.js", "Performance", "Backend"],
    image: "/nodejs-performance-dashboard.png",
  },
  {
    slug: "typescript-advanced-patterns",
    title: "Advanced TypeScript Patterns for Large Applications",
    excerpt: "Master advanced TypeScript patterns and techniques for building maintainable large-scale applications.",
    content:
      "TypeScript's type system offers powerful features for building robust applications. In this comprehensive guide...",
    author: "Alex Thompson",
    date: "Dec 14, 2024",
    readTime: "15 min read",
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Architecture"],
    image: "/ai-web-dev-interface.png",
  },
  {
    slug: "css-grid-mastery",
    title: "CSS Grid Layout: From Basics to Advanced",
    excerpt: "Complete guide to CSS Grid layout with practical examples and advanced techniques for modern web design.",
    content: "CSS Grid revolutionized web layout design by providing a two-dimensional layout system...",
    author: "Emma Wilson",
    date: "Dec 12, 2024",
    readTime: "10 min read",
    category: "CSS",
    tags: ["CSS", "Web Design", "Layout"],
    image: "/css-grid-layout.png",
  },
  {
    slug: "javascript-testing-strategies",
    title: "Modern JavaScript Testing Strategies",
    excerpt:
      "Comprehensive guide to testing JavaScript applications with Jest, Testing Library, and modern best practices.",
    content: "Testing is crucial for maintaining code quality and preventing regressions in JavaScript applications...",
    author: "David Park",
    date: "Dec 10, 2024",
    readTime: "11 min read",
    category: "Testing",
    tags: ["JavaScript", "Testing", "Jest"],
    image: "/javascript-code-coverage.png",
  },
]

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [filteredPosts, setFilteredPosts] = useState(allPosts)

  useEffect(() => {
    if (query.trim()) {
      const filtered = allPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          post.content.toLowerCase().includes(query.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())) ||
          post.category.toLowerCase().includes(query.toLowerCase()),
      )
      setFilteredPosts(filtered)
    } else {
      setFilteredPosts(allPosts)
    }
  }, [query])

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          {query && (
            <p className="text-muted-foreground">
              {filteredPosts.length} result{filteredPosts.length !== 1 ? "s" : ""} found for "{query}"
            </p>
          )}
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.slug} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 md:h-32 flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>

                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-semibold mb-2 hover:text-accent transition-colors">{post.title}</h2>
                      </Link>

                      <p className="text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">By {post.author}</p>

                        <div className="flex gap-1">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No results found</h2>
            <p className="text-muted-foreground">Try adjusting your search terms or browse our categories.</p>
          </div>
        )}
      </main>

      <BlogFooter />
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search results...</div>}>
      <SearchResults />
    </Suspense>
  )
}
