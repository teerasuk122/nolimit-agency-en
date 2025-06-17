import { Calendar, Clock, ArrowRight, Sparkles, TrendingUp, BookOpen, Lightbulb } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI-Powered Facebook Advertising in 2024",
    excerpt: "Discover how artificial intelligence is revolutionizing Facebook advertising strategies and what it means for your business growth in the digital age.",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Marketing",
    gradient: "from-cyan-400 to-purple-600",
    image: "/api/placeholder/800/400"
  }

  const blogPosts = [
    {
      title: "10 Facebook Ad Optimization Techniques That Actually Work",
      excerpt: "Learn proven strategies to improve your Facebook ad performance and maximize your return on investment with these expert techniques.",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Facebook Ads",
      gradient: "from-blue-400 to-cyan-600"
    },
    {
      title: "Building High-Converting Landing Pages for Digital Campaigns",
      excerpt: "Master the art of creating landing pages that convert visitors into customers with these design and psychology principles.",
      date: "December 10, 2024",
      readTime: "7 min read",
      category: "Web Design",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      title: "Social Media Marketing Trends to Watch in 2024",
      excerpt: "Stay ahead of the curve with these emerging social media marketing trends that will shape the digital landscape.",
      date: "December 8, 2024",
      readTime: "5 min read",
      category: "Social Media",
      gradient: "from-green-400 to-emerald-600"
    },
    {
      title: "Data-Driven Marketing: Analytics That Matter",
      excerpt: "Transform your marketing strategy with actionable insights from data analytics and performance metrics.",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Analytics",
      gradient: "from-orange-400 to-red-600"
    },
    {
      title: "SEO Strategies for E-commerce Success",
      excerpt: "Boost your online store's visibility with proven SEO techniques tailored for e-commerce businesses.",
      date: "December 3, 2024",
      readTime: "6 min read",
      category: "SEO",
      gradient: "from-indigo-400 to-purple-600"
    },
    {
      title: "Content Marketing in the Age of AI",
      excerpt: "Explore how artificial intelligence is transforming content creation and distribution strategies.",
      date: "December 1, 2024",
      readTime: "7 min read",
      category: "Content Marketing",
      gradient: "from-pink-400 to-purple-600"
    }
  ]

  const categories = [
    { name: "All Posts", count: 24, icon: BookOpen },
    { name: "Facebook Ads", count: 8, icon: TrendingUp },
    { name: "AI Marketing", count: 6, icon: Lightbulb },
    { name: "Web Design", count: 5, icon: Sparkles },
    { name: "Analytics", count: 5, icon: TrendingUp }
  ]

  return (
    <>
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 mb-8 group">
                <div className="relative bg-black/40 backdrop-blur-xl rounded-full px-6 py-3 border border-cyan-400/30">
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-100 font-medium text-sm tracking-wider uppercase">Our Blog</span>
                  </div>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                <span className="block">Digital Marketing</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Insights & Tips
                </span>
              </h1>

              {/* Description */}
              <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
                Stay updated with the latest{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  digital marketing trends
                </span>
                , expert tips, and industry insights to grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
                Featured Article
              </h2>
              
              <div className="group cursor-pointer">
                <div className="bg-black/20 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                    {/* Content */}
                    <div className="flex flex-col justify-center">
                      <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${featuredPost.gradient} bg-opacity-20 rounded-full px-4 py-2 text-sm font-medium mb-4 w-fit`}>
                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${featuredPost.gradient}`}>
                          {featuredPost.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {featuredPost.title}
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300">
                        <span>Read Article</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Image Placeholder */}
                    <div className={`bg-gradient-to-br ${featuredPost.gradient} rounded-2xl h-64 lg:h-full min-h-[300px] flex items-center justify-center`}>
                      <div className="text-white/20 text-6xl">📱</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Categories Sidebar */}
              <div className="lg:w-1/4">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 sticky top-24">
                  <h3 className="text-lg font-bold text-white mb-6">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category, index) => {
                      const IconComponent = category.icon
                      return (
                        <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 cursor-pointer transition-colors duration-300 group">
                          <div className="flex items-center gap-3">
                            <IconComponent className="w-4 h-4 text-cyan-400" />
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                              {category.name}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 bg-white/10 px-2 py-1 rounded-full">
                            {category.count}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <article key={index} className="group cursor-pointer">
                      <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                        {/* Category */}
                        <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${post.gradient} bg-opacity-20 rounded-full px-3 py-1 text-xs font-medium mb-4 w-fit`}>
                          <span className={`text-transparent bg-clip-text bg-gradient-to-r ${post.gradient}`}>
                            {post.category}
                          </span>
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>
                        
                        {/* Excerpt */}
                        <p className="text-gray-300 leading-relaxed mb-4 flex-grow line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        {/* Meta */}
                        <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        {/* Read More */}
                        <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm group-hover:gap-4 transition-all duration-300">
                          <span>Read More</span>
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More */}
                <div className="text-center mt-12">
                  <button className="group relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                      <span className="tracking-wider">Load More Articles</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="bg-black/20 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Updated with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Marketing Insights
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest digital marketing tips delivered to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-black/20 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                />
                <button className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105 border border-cyan-400/50">
                    <span className="tracking-wider">Subscribe</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
} 