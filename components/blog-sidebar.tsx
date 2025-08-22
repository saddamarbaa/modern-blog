"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Calendar, Tag } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const recentPosts = [
  {
    title: "TypeScript 5.3: New Features and Breaking Changes",
    date: "Dec 17, 2024",
  },
  {
    title: "Building Scalable Microservices with Node.js",
    date: "Dec 15, 2024",
  },
  {
    title: "Web Performance: Core Web Vitals Optimization",
    date: "Dec 13, 2024",
  },
  {
    title: "Authentication Patterns in Modern Web Apps",
    date: "Dec 11, 2024",
  },
]

const categories = [
  { name: "React", count: 28 },
  { name: "Node.js", count: 22 },
  { name: "TypeScript", count: 19 },
  { name: "CSS", count: 16 },
  { name: "DevOps", count: 14 },
  { name: "Testing", count: 12 },
  { name: "API", count: 18 },
  { name: "Performance", count: 15 },
]

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "JavaScript",
  "CSS",
  "Docker",
  "GraphQL",
  "Testing",
  "Performance",
  "AI/ML",
  "WebAssembly",
]

export function BlogSidebar() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <aside className="space-y-6">
      {/* Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Search</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex space-x-2">
            <Input
              placeholder="Search tech articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Recent Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Recent Posts</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="border-b border-border last:border-0 pb-3 last:pb-0">
              <h4 className="font-medium text-sm hover:text-accent cursor-pointer transition-colors">{post.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{post.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle>Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center justify-between">
              <a href="#" className="text-sm hover:text-accent transition-colors">
                {category.name}
              </a>
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">{category.count}</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tags */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Tag className="h-5 w-5" />
            <span>Popular Tags</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7 hover:bg-accent hover:text-accent-foreground bg-transparent"
              >
                {tag}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card className="bg-accent/5">
        <CardHeader>
          <CardTitle>Stay Updated</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Get the latest tech insights and tutorials delivered to your inbox weekly.
          </p>
          <div className="space-y-2">
            <Input placeholder="Your email address" type="email" />
            <Button className="w-full">Subscribe</Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}
