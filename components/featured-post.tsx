import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, TrendingUp, Eye, Heart } from "lucide-react"
import Link from "next/link"

export function FeaturedPost() {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-0">
            <TrendingUp className="h-3 w-3 mr-1" />
            Featured Article
          </Badge>
          <h2 className="text-2xl font-bold text-muted-foreground mb-2">Editor's Pick</h2>
        </div>

        <Card className="overflow-hidden border-0 shadow-2xl bg-card/80 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
          <div className="md:flex">
            <div className="md:w-1/2 relative group">
              <Link href="/blog/ai-powered-development">
                <img
                  src="/ai-web-dev-interface.png"
                  alt="Featured post"
                  className="h-64 md:h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
            <CardContent className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">Alex Chen</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Dec 18, 2024</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>8 min read</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>4.2k</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>312</span>
                  </div>
                </div>
              </div>

              <Link href="/blog/ai-powered-development">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground hover:text-emerald-600 transition-colors leading-tight">
                  AI-Powered Development: How Machine Learning is Transforming Code Generation
                </h2>
              </Link>

              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                Explore the revolutionary impact of AI on software development, from automated code completion to
                intelligent debugging tools. Discover how developers are leveraging machine learning to write better
                code faster than ever before.
              </p>

              <div className="flex items-center space-x-4">
                <Link href="/blog/ai-powered-development">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white border-0 px-8"
                  >
                    Read Full Article
                  </Button>
                </Link>
                <Badge variant="outline" className="text-emerald-600 border-emerald-600">
                  AI & Development
                </Badge>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
