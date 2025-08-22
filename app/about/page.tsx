import { BlogHeader } from "@/components/blog-header"
import { BlogFooter } from "@/components/blog-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Target, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <BookOpen className="h-16 w-16 text-accent" />
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">About TechInsight</h1>
            <p className="text-xl text-muted-foreground">
              Your trusted source for cutting-edge technology insights and development expertise.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="h-6 w-6 text-accent" />
                  <CardTitle>Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To empower developers and tech enthusiasts with practical insights, cutting-edge tutorials, and
                  industry best practices that drive innovation and professional growth in the rapidly evolving tech
                  landscape.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-6 w-6 text-accent" />
                  <CardTitle>Our Community</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Join thousands of developers, designers, and tech leaders who rely on TechInsight for the latest
                  trends, practical tutorials, and expert analysis of emerging technologies and development
                  methodologies.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What We Cover</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">
                  Frontend
                </Badge>
                <p className="text-sm text-muted-foreground">React, Vue, Angular, CSS, JavaScript</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">
                  Backend
                </Badge>
                <p className="text-sm text-muted-foreground">Node.js, Python, APIs, Databases</p>
              </div>
              <div className="text-center">
                <Badge variant="secondary" className="mb-2">
                  DevOps
                </Badge>
                <p className="text-sm text-muted-foreground">CI/CD, Cloud, Docker, Monitoring</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-2 mb-2">
                <Award className="h-6 w-6 text-accent" />
                <CardTitle>Why Choose TechInsight?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Expert Authors</h3>
                  <p className="text-sm text-muted-foreground">
                    Content created by industry professionals with real-world experience.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Practical Focus</h3>
                  <p className="text-sm text-muted-foreground">
                    Tutorials and insights you can immediately apply to your projects.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Latest Trends</h3>
                  <p className="text-sm text-muted-foreground">
                    Stay ahead with coverage of emerging technologies and best practices.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Community Driven</h3>
                  <p className="text-sm text-muted-foreground">
                    Engaging discussions and knowledge sharing among tech professionals.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <BlogFooter />
    </div>
  )
}
