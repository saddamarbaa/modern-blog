import { Search, Menu, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserMenu } from "@/components/auth/user-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-emerald-600" />
            <Link href="/">
              <h1 className="text-2xl font-bold text-foreground hover:text-emerald-600 transition-colors cursor-pointer">
                TechInsight
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/technology" className="text-foreground hover:text-emerald-600 transition-colors">
              Technology
            </Link>
            <Link href="/development" className="text-foreground hover:text-emerald-600 transition-colors">
              Development
            </Link>
            <Link href="/about" className="text-foreground hover:text-emerald-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Input type="search" placeholder="Search articles..." className="w-64" />
              <Button size="icon" variant="ghost">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <ThemeToggle />
            <UserMenu />
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
