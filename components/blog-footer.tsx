import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function BlogFooter() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">TechInsight</h3>
            </div>
            <p className="text-muted-foreground">
              Empowering developers with cutting-edge insights, tutorials, and industry knowledge.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  React & Next.js
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Node.js & Backend
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  TypeScript
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  DevOps & Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Performance
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Weekly Newsletter</h4>
            <p className="text-muted-foreground text-sm">
              Get the latest tech insights and tutorials delivered weekly.
            </p>
            <div className="space-y-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">© 2024 TechInsight. All rights reserved.</p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for developers
          </p>
        </div>
      </div>
    </footer>
  )
}
