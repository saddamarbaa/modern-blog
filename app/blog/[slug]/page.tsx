import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = {
  "ai-powered-development": {
    id: "ai-powered-development",
    title: "AI-Powered Development: How Machine Learning is Transforming Code Generation",
    excerpt:
      "Explore the revolutionary impact of AI on software development, from automated code completion to intelligent debugging tools.",
    author: "Alex Chen",
    date: "Dec 18, 2024",
    readTime: "8 min read",
    image: "/ai-web-dev-interface.png",
    category: "AI",
    content: `
      <p>The landscape of software development is undergoing a revolutionary transformation, driven by the rapid advancement of artificial intelligence and machine learning technologies. What once seemed like science fiction is now becoming an integral part of our daily development workflow.</p>
      
      <h2>The Rise of AI-Assisted Coding</h2>
      <p>Modern developers are increasingly relying on AI-powered tools to enhance their productivity and code quality. From GitHub Copilot to ChatGPT, these tools are not just suggesting code completions—they're understanding context, generating entire functions, and even helping with architectural decisions.</p>
      
      <h2>Key Benefits of AI in Development</h2>
      <ul>
        <li><strong>Faster Development Cycles:</strong> AI can generate boilerplate code, reducing the time spent on repetitive tasks.</li>
        <li><strong>Improved Code Quality:</strong> AI tools can suggest best practices and identify potential bugs before they make it to production.</li>
        <li><strong>Learning Acceleration:</strong> New developers can learn faster by seeing AI-generated examples and explanations.</li>
        <li><strong>Cross-Language Support:</strong> AI can help developers work with unfamiliar programming languages and frameworks.</li>
      </ul>
      
      <h2>Real-World Applications</h2>
      <p>Companies like Microsoft, Google, and OpenAI are leading the charge in AI-powered development tools. These applications range from intelligent code completion to automated testing and deployment pipelines.</p>
      
      <h2>The Future of AI in Development</h2>
      <p>As AI continues to evolve, we can expect even more sophisticated tools that understand not just syntax, but also business logic, user requirements, and system architecture. The future developer will be more of an AI orchestrator than a code writer.</p>
      
      <p>However, it's important to remember that AI is a tool to augment human creativity and problem-solving, not replace it. The most successful developers will be those who learn to effectively collaborate with AI while maintaining their critical thinking and architectural skills.</p>
    `,
  },
  "mastering-react-server-components": {
    id: "mastering-react-server-components",
    title: "Mastering React Server Components in Next.js 15",
    excerpt:
      "Deep dive into React Server Components and how they're revolutionizing full-stack development with improved performance and developer experience.",
    author: "Sarah Johnson",
    date: "Dec 16, 2024",
    readTime: "12 min read",
    image: "/react-typescript-editor.png",
    category: "React",
    content: `
      <p>React Server Components represent one of the most significant architectural shifts in React since hooks. With Next.js 15's enhanced support, developers can now build more performant and scalable applications than ever before.</p>
      
      <h2>Understanding Server Components</h2>
      <p>Server Components run on the server and send their rendered output to the client. This approach offers several advantages including reduced bundle size, direct database access, and improved initial page load times.</p>
      
      <h2>Key Differences from Client Components</h2>
      <ul>
        <li><strong>Execution Environment:</strong> Server Components run on the server, while Client Components run in the browser.</li>
        <li><strong>State Management:</strong> Server Components cannot use useState or useEffect hooks.</li>
        <li><strong>Data Fetching:</strong> Server Components can directly access databases and APIs without exposing credentials to the client.</li>
        <li><strong>Bundle Size:</strong> Server Component code doesn't contribute to the client-side JavaScript bundle.</li>
      </ul>
      
      <h2>Best Practices for Implementation</h2>
      <p>When implementing Server Components, it's crucial to understand the boundaries between server and client code. Use Server Components for data fetching and static content, while reserving Client Components for interactive elements that require state or browser APIs.</p>
      
      <h2>Performance Benefits</h2>
      <p>The performance improvements with Server Components are substantial. By moving rendering to the server, we reduce the amount of JavaScript sent to the client, leading to faster initial page loads and better Core Web Vitals scores.</p>
      
      <p>As the React ecosystem continues to evolve, Server Components will become increasingly important for building modern, performant web applications. Mastering this technology now will give you a significant advantage in the rapidly changing landscape of web development.</p>
    `,
  },
  "advanced-css-grid-techniques": {
    id: "advanced-css-grid-techniques",
    title: "Advanced CSS Grid Techniques for Modern Layouts",
    excerpt:
      "Master complex grid layouts with subgrid, container queries, and advanced positioning techniques that will elevate your web designs.",
    author: "Michael Rodriguez",
    date: "Dec 14, 2024",
    readTime: "10 min read",
    image: "/css-grid-layout.png",
    category: "CSS",
    content: `
      <p>CSS Grid has revolutionized how we approach web layouts, offering unprecedented control over both simple and complex designs. In this comprehensive guide, we'll explore advanced techniques that will take your grid skills to the next level.</p>
      
      <h2>Understanding Subgrid</h2>
      <p>Subgrid allows nested grid items to participate in the sizing of their parent grid, creating more cohesive and flexible layouts. This feature is particularly powerful for card-based designs and complex content structures.</p>
      
      <h2>Container Queries: The Game Changer</h2>
      <p>Container queries enable responsive design based on the container's size rather than the viewport. This approach allows for truly modular components that adapt to their context.</p>
      
      <h2>Advanced Grid Positioning</h2>
      <ul>
        <li><strong>Named Grid Lines:</strong> Create semantic grid structures with meaningful line names.</li>
        <li><strong>Grid Template Areas:</strong> Define layout regions for intuitive positioning.</li>
        <li><strong>Implicit Grid Control:</strong> Master auto-placement and sizing algorithms.</li>
      </ul>
      
      <h2>Performance Considerations</h2>
      <p>While CSS Grid is highly optimized, understanding its performance characteristics helps you make informed decisions about when and how to use advanced features.</p>
      
      <p>These advanced CSS Grid techniques open up new possibilities for creative and functional web layouts. Practice these concepts to build more sophisticated and maintainable designs.</p>
    `,
  },
  "nodejs-performance-optimization": {
    id: "nodejs-performance-optimization",
    title: "Node.js Performance Optimization: From Basics to Advanced",
    excerpt:
      "Learn proven strategies to optimize your Node.js applications, including memory management, async patterns, and monitoring techniques.",
    author: "Emma Wilson",
    date: "Dec 12, 2024",
    readTime: "15 min read",
    image: "/nodejs-performance-dashboard.png",
    category: "Node.js",
    content: `
      <p>Node.js performance optimization is crucial for building scalable applications that can handle high traffic loads. This guide covers essential techniques from basic optimizations to advanced performance tuning.</p>
      
      <h2>Memory Management Fundamentals</h2>
      <p>Understanding V8's garbage collection and memory allocation patterns is key to preventing memory leaks and optimizing performance. Learn to use heap snapshots and profiling tools effectively.</p>
      
      <h2>Asynchronous Patterns and Event Loop</h2>
      <p>Master the event loop, understand blocking vs non-blocking operations, and implement efficient async patterns using promises, async/await, and streams.</p>
      
      <h2>Database Optimization Strategies</h2>
      <ul>
        <li><strong>Connection Pooling:</strong> Efficiently manage database connections to reduce overhead.</li>
        <li><strong>Query Optimization:</strong> Write efficient queries and use proper indexing strategies.</li>
        <li><strong>Caching Layers:</strong> Implement Redis and in-memory caching for frequently accessed data.</li>
      </ul>
      
      <h2>Monitoring and Profiling</h2>
      <p>Set up comprehensive monitoring with tools like New Relic, DataDog, or custom solutions. Learn to identify bottlenecks and performance regressions early.</p>
      
      <p>Performance optimization is an ongoing process. Regular monitoring, profiling, and testing ensure your Node.js applications remain fast and reliable as they scale.</p>
    `,
  },
  "javascript-testing": {
    id: "javascript-testing",
    title: "JavaScript Testing: Achieving 100% Code Coverage",
    excerpt:
      "Comprehensive guide to testing strategies, tools, and best practices for maintaining high-quality JavaScript codebases.",
    author: "David Kumar",
    date: "Dec 10, 2024",
    readTime: "11 min read",
    image: "/javascript-code-coverage.png",
    category: "Testing",
    content: `
      <p>Achieving comprehensive test coverage is essential for maintaining reliable JavaScript applications. This guide explores testing strategies, tools, and methodologies to reach and maintain 100% code coverage.</p>
      
      <h2>Testing Pyramid and Strategy</h2>
      <p>Understand the testing pyramid: unit tests form the foundation, integration tests verify component interactions, and end-to-end tests validate user workflows.</p>
      
      <h2>Essential Testing Tools</h2>
      <ul>
        <li><strong>Jest:</strong> Comprehensive testing framework with built-in mocking and coverage reporting.</li>
        <li><strong>Testing Library:</strong> User-centric testing utilities for React and other frameworks.</li>
        <li><strong>Cypress:</strong> Modern end-to-end testing with real browser automation.</li>
      </ul>
      
      <h2>Coverage Metrics and Quality</h2>
      <p>Learn the difference between line, branch, function, and statement coverage. Understand why 100% coverage doesn't guarantee bug-free code, but provides confidence in your test suite.</p>
      
      <h2>Advanced Testing Techniques</h2>
      <p>Master mocking strategies, test doubles, and dependency injection. Learn to test async code, error conditions, and edge cases effectively.</p>
      
      <p>Quality testing practices lead to more maintainable code and faster development cycles. Invest in your testing infrastructure for long-term project success.</p>
    `,
  },
  "docker-for-developers": {
    id: "docker-for-developers",
    title: "Docker for Developers: Containerizing Your Development Workflow",
    excerpt:
      "Streamline your development process with Docker containers, from local development to production deployment strategies.",
    author: "Lisa Park",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    image: "/docker-containers-development.png",
    category: "DevOps",
    content: `
      <p>Docker has transformed how developers build, ship, and run applications. This comprehensive guide covers everything from basic containerization to advanced deployment strategies.</p>
      
      <h2>Container Fundamentals</h2>
      <p>Understand the difference between containers and virtual machines, learn Docker architecture, and master the essential commands for container management.</p>
      
      <h2>Dockerfile Best Practices</h2>
      <ul>
        <li><strong>Multi-stage Builds:</strong> Optimize image size and security with layered builds.</li>
        <li><strong>Layer Caching:</strong> Structure Dockerfiles for efficient build caching.</li>
        <li><strong>Security Considerations:</strong> Use non-root users and minimal base images.</li>
      </ul>
      
      <h2>Development Workflow Integration</h2>
      <p>Set up Docker Compose for multi-service applications, implement hot reloading for development, and create consistent environments across team members.</p>
      
      <h2>Production Deployment</h2>
      <p>Learn container orchestration basics, understand health checks and logging, and implement proper secrets management for production deployments.</p>
      
      <p>Docker simplifies development workflows and ensures consistency across environments. Master these concepts to build more reliable and portable applications.</p>
    `,
  },
  "graphql-vs-rest": {
    id: "graphql-vs-rest",
    title: "GraphQL vs REST: Making the Right Choice in 2024",
    excerpt:
      "Compare GraphQL and REST APIs with real-world examples, performance considerations, and implementation best practices.",
    author: "Rachel Green",
    date: "Dec 6, 2024",
    readTime: "13 min read",
    image: "/graphql-vs-rest-api.png",
    category: "API",
    content: `
      <p>The choice between GraphQL and REST continues to be a critical architectural decision. This comprehensive comparison helps you make informed decisions based on your project's specific needs.</p>
      
      <h2>REST: The Established Standard</h2>
      <p>REST APIs offer simplicity, widespread tooling support, and excellent caching capabilities. They work well for CRUD operations and when you need predictable, cacheable endpoints.</p>
      
      <h2>GraphQL: The Flexible Alternative</h2>
      <p>GraphQL provides precise data fetching, strong typing, and excellent developer experience. It excels in scenarios requiring flexible data requirements and rapid frontend development.</p>
      
      <h2>Performance Considerations</h2>
      <ul>
        <li><strong>Network Efficiency:</strong> GraphQL reduces over-fetching, while REST benefits from HTTP caching.</li>
        <li><strong>Complexity Trade-offs:</strong> GraphQL adds server complexity but simplifies client data management.</li>
        <li><strong>Caching Strategies:</strong> REST has mature caching, GraphQL requires more sophisticated approaches.</li>
      </ul>
      
      <h2>When to Choose Each</h2>
      <p>Choose REST for simple CRUD applications, public APIs, and when caching is critical. Choose GraphQL for complex data relationships, rapid prototyping, and when you need flexible data fetching.</p>
      
      <p>Both technologies have their place in modern development. Understanding their strengths and limitations helps you make the right choice for each project.</p>
    `,
  },
  "typescript-advanced-patterns": {
    id: "typescript-advanced-patterns",
    title: "TypeScript Advanced Patterns: Generic Constraints and Conditional Types",
    excerpt:
      "Master advanced TypeScript features including mapped types, template literals, and complex generic patterns for type-safe applications.",
    author: "James Mitchell",
    date: "Dec 4, 2024",
    readTime: "14 min read",
    image: "/typescript-advanced-patterns.png",
    category: "TypeScript",
    content: `
      <p>Advanced TypeScript patterns unlock powerful type-safe programming techniques. This guide explores generic constraints, conditional types, and other advanced features that make TypeScript truly shine.</p>
      
      <h2>Generic Constraints and Relationships</h2>
      <p>Learn to create flexible yet constrained generic types that maintain type safety while providing powerful abstractions. Master keyof, extends, and conditional type patterns.</p>
      
      <h2>Mapped Types and Transformations</h2>
      <p>Discover how to transform existing types using mapped types, create utility types, and build complex type manipulations that adapt to your data structures.</p>
      
      <h2>Template Literal Types</h2>
      <ul>
        <li><strong>String Manipulation:</strong> Create types that manipulate string literals at the type level.</li>
        <li><strong>API Route Types:</strong> Generate type-safe API routes and parameters automatically.</li>
        <li><strong>CSS-in-JS Types:</strong> Build type-safe styling systems with template literals.</li>
      </ul>
      
      <h2>Conditional Types in Practice</h2>
      <p>Master conditional types for creating adaptive APIs, building type-safe event systems, and implementing complex business logic at the type level.</p>
      
      <p>These advanced TypeScript patterns enable you to build more robust, maintainable applications with compile-time guarantees that prevent entire classes of runtime errors.</p>
    `,
  },
  "web-accessibility-guide": {
    id: "web-accessibility-guide",
    title: "Web Accessibility: Building Inclusive Digital Experiences",
    excerpt:
      "Complete guide to web accessibility standards, ARIA patterns, and testing strategies for creating inclusive web applications.",
    author: "Maria Santos",
    date: "Dec 2, 2024",
    readTime: "16 min read",
    image: "/web-accessibility-inclusive-design.png",
    category: "Accessibility",
    content: `
      <p>Web accessibility ensures that digital experiences are usable by everyone, regardless of their abilities. This comprehensive guide covers WCAG guidelines, ARIA patterns, and practical implementation strategies.</p>
      
      <h2>WCAG 2.1 Guidelines Overview</h2>
      <p>Understand the four principles of accessibility: Perceivable, Operable, Understandable, and Robust. Learn how to apply these principles in practical development scenarios.</p>
      
      <h2>ARIA Patterns and Best Practices</h2>
      <ul>
        <li><strong>Semantic HTML First:</strong> Use native HTML elements before adding ARIA attributes.</li>
        <li><strong>ARIA Labels and Descriptions:</strong> Provide context for screen readers and assistive technologies.</li>
        <li><strong>Live Regions:</strong> Announce dynamic content changes to users of assistive technologies.</li>
      </ul>
      
      <h2>Testing and Validation</h2>
      <p>Implement automated accessibility testing with tools like axe-core, perform manual testing with screen readers, and conduct user testing with people who use assistive technologies.</p>
      
      <h2>Common Accessibility Patterns</h2>
      <p>Learn to implement accessible forms, navigation menus, modal dialogs, and complex interactive components that work for all users.</p>
      
      <p>Building accessible applications is not just about compliance—it's about creating inclusive experiences that benefit all users and expand your application's reach.</p>
    `,
  },
  "micro-frontends-architecture": {
    id: "micro-frontends-architecture",
    title: "Micro-Frontends: Scaling Frontend Architecture for Large Teams",
    excerpt:
      "Explore micro-frontend patterns, module federation, and strategies for building scalable frontend architectures in enterprise environments.",
    author: "Kevin Zhang",
    date: "Nov 30, 2024",
    readTime: "18 min read",
    image: "/micro-frontends-architecture.png",
    category: "Architecture",
    content: `
      <p>Micro-frontends extend the microservices concept to frontend development, enabling large teams to work independently while maintaining a cohesive user experience.</p>
      
      <h2>Micro-Frontend Patterns</h2>
      <p>Explore different approaches including build-time integration, runtime integration, and server-side composition. Understand the trade-offs of each approach.</p>
      
      <h2>Module Federation with Webpack</h2>
      <p>Learn to implement module federation for sharing code and components across micro-frontends while maintaining independent deployments and development cycles.</p>
      
      <h2>Team Organization and Governance</h2>
      <ul>
        <li><strong>Domain-Driven Design:</strong> Organize teams around business domains rather than technical layers.</li>
        <li><strong>Shared Design Systems:</strong> Maintain consistency while allowing team autonomy.</li>
        <li><strong>API Contracts:</strong> Define clear interfaces between micro-frontends.</li>
      </ul>
      
      <h2>Challenges and Solutions</h2>
      <p>Address common challenges including bundle size optimization, shared state management, and maintaining consistent user experiences across micro-frontends.</p>
      
      <p>Micro-frontends enable organizations to scale frontend development effectively, but require careful planning and governance to implement successfully.</p>
    `,
  },
  "serverless-functions-guide": {
    id: "serverless-functions-guide",
    title: "Serverless Functions: From Zero to Production",
    excerpt:
      "Master serverless computing with practical examples, deployment strategies, and performance optimization techniques for modern applications.",
    author: "Anna Kowalski",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    image: "/serverless-cloud.png",
    category: "Serverless",
    content: `
      <p>Serverless computing revolutionizes how we build and deploy applications by abstracting server management and enabling automatic scaling based on demand.</p>
      
      <h2>Serverless Fundamentals</h2>
      <p>Understand the serverless execution model, cold starts, and how to design functions for optimal performance and cost efficiency.</p>
      
      <h2>Platform Comparison</h2>
      <ul>
        <li><strong>AWS Lambda:</strong> Comprehensive ecosystem with extensive integrations.</li>
        <li><strong>Vercel Functions:</strong> Optimized for frontend developers and Next.js applications.</li>
        <li><strong>Netlify Functions:</strong> Simple deployment with JAMstack integration.</li>
      </ul>
      
      <h2>Best Practices for Production</h2>
      <p>Learn to handle errors gracefully, implement proper logging and monitoring, and optimize function performance for production workloads.</p>
      
      <h2>Cost Optimization Strategies</h2>
      <p>Understand pricing models, implement efficient resource usage patterns, and monitor costs to avoid unexpected bills in serverless applications.</p>
      
      <p>Serverless functions enable rapid development and automatic scaling, making them ideal for modern applications that need to handle variable workloads efficiently.</p>
    `,
  },
  "web-performance-optimization": {
    id: "web-performance-optimization",
    title: "Web Performance Optimization: Core Web Vitals and Beyond",
    excerpt:
      "Comprehensive guide to improving website performance, from image optimization to code splitting and caching strategies.",
    author: "Tom Anderson",
    date: "Nov 26, 2024",
    readTime: "15 min read",
    image: "/web-performance-metrics.png",
    category: "Performance",
    content: `
      <p>Web performance directly impacts user experience, SEO rankings, and business metrics. This guide covers comprehensive optimization strategies for modern web applications.</p>
      
      <h2>Core Web Vitals Explained</h2>
      <p>Master Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS). Learn to measure and optimize these critical metrics.</p>
      
      <h2>Image Optimization Strategies</h2>
      <ul>
        <li><strong>Modern Formats:</strong> Use WebP and AVIF for better compression ratios.</li>
        <li><strong>Responsive Images:</strong> Implement srcset and sizes for optimal loading.</li>
        <li><strong>Lazy Loading:</strong> Load images only when needed to improve initial page load.</li>
      </ul>
      
      <h2>Code Splitting and Bundling</h2>
      <p>Implement dynamic imports, route-based splitting, and component-level code splitting to reduce initial bundle sizes and improve loading performance.</p>
      
      <h2>Caching Strategies</h2>
      <p>Master browser caching, CDN configuration, and service worker caching to minimize network requests and improve repeat visit performance.</p>
      
      <p>Performance optimization is an ongoing process that requires measurement, analysis, and continuous improvement to maintain fast, responsive web applications.</p>
    `,
  },
  "progressive-web-apps": {
    id: "progressive-web-apps",
    title: "Progressive Web Apps: Native-Like Experiences on the Web",
    excerpt:
      "Build PWAs with service workers, offline functionality, and native app features using modern web technologies.",
    author: "Sophie Laurent",
    date: "Nov 24, 2024",
    readTime: "13 min read",
    image: "/pwa-mobile-interface.png",
    category: "PWA",
    content: `
      <p>Progressive Web Apps combine the best of web and native applications, offering app-like experiences that work across all devices and platforms.</p>
      
      <h2>PWA Core Technologies</h2>
      <p>Master service workers for offline functionality, web app manifests for installation, and push notifications for user engagement.</p>
      
      <h2>Offline-First Architecture</h2>
      <p>Design applications that work seamlessly offline using caching strategies, background sync, and local data storage solutions.</p>
      
      <h2>Native App Features</h2>
      <ul>
        <li><strong>App Installation:</strong> Enable users to install your PWA on their home screen.</li>
        <li><strong>Push Notifications:</strong> Re-engage users with timely, relevant notifications.</li>
        <li><strong>Background Sync:</strong> Sync data when connectivity is restored.</li>
      </ul>
      
      <h2>Performance and UX</h2>
      <p>Implement app shell architecture, optimize for mobile devices, and create smooth, native-like interactions and animations.</p>
      
      <p>PWAs represent the future of web applications, offering the reach of the web with the engagement of native apps. Start building PWAs to provide superior user experiences.</p>
    `,
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <Card className="mb-8">
          <div className="relative h-64 md:h-96 overflow-hidden rounded-t-lg">
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center space-x-6 text-muted-foreground mb-6">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">{post.excerpt}</p>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <div
                className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </CardContent>
          </Card>
        </div>

        {/* Author Bio */}
        <Card className="mt-8 max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground">
                  A passionate developer and technical writer with expertise in modern web technologies. Follow for more
                  insights on React, Next.js, and cutting-edge development practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
