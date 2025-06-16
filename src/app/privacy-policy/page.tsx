import { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, FileText, Target, Lock, Database, Trash2, AlertTriangle, Clipboard, Cookie, Scale, Phone, Smartphone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy | AdsManagement - Digital Marketing Agency',
  description: 'Learn about how AdsManagement protects and handles your personal information and data privacy.',
}

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      
      {/* Hero Section with Purple Gradient Background */}
      <section className="relative min-h-screen overflow-hidden pt-20">
        {/* Gradient Background similar to homepage */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-600 to-blue-600">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-800/20 via-transparent to-purple-500/30"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse animation-delay-200"></div>
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl floating-animation animation-delay-400"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-white/80 mb-8">
              <a href="/" className="hover:text-yellow-300 transition-colors font-medium">Home</a>
              <span>/</span>
              <span className="text-yellow-300 font-medium">Privacy Policy</span>
            </nav>
            
            {/* Main Title */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium mb-6">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-purple-600" />
              </div>
              <span>Legal & Privacy Information</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Privacy Policy
              <span className="block text-yellow-300 mt-2">& Terms of Service</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Learn about how AdsManagement protects and handles your personal information with complete transparency and security
            </p>
          </div>

          {/* Content Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 p-8 md:p-12 shadow-2xl">
            <div className="prose prose-lg max-w-none">
              
              {/* Privacy Policy Section */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 mb-8 border border-white/30">
                  <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Lock className="w-5 h-5 text-white" />
                    </span>
                    AdsManagement Privacy Policy
                  </h2>
                  <p className="text-white/80">Your privacy and data security are our top priorities</p>
                </div>
                
                <div className="grid gap-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                        <FileText className="w-4 h-4 text-white" />
                      </span>
                      1. Information AdsManagement Collects
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-4">
                      To provide services and deliver better experiences for all users, we collect information from you when you register on the AdsManagement website. Specifically, when you create an account, you provide us with personal information (including your full name, phone number, and contact email address). However, you can still access our site anonymously. This means you can visit our site without revealing any information about yourself.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      Regarding information customization, you can edit your name in the Account Management page on our website. If you change your login email or phone number, you need to send us a request and go through authentication steps.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                        <Target className="w-4 h-4 text-white" />
                      </span>
                      2. Purpose of Information Collection
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      AdsManagement uses collected data for general purposes: account identification and authentication, service improvement, customer care, and research. Additionally, your information and registration account will be stored indefinitely so you can renew services at any time.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                        <Shield className="w-4 h-4 text-white" />
                      </span>
                      3. Information Security
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      AdsManagement takes user information security very seriously. Therefore, we do not sell, exchange, or use any other commercial forms with your personal information.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <Database className="w-4 h-4 text-white" />
                      </span>
                      4. Information Storage
                    </h3>
                    <div className="space-y-4">
                      <p className="text-white/80 leading-relaxed">
                        AdsManagement commits to absolutely not storing any user data during the use of products/services we provide.
                      </p>
                      <p className="text-white/80 leading-relaxed">
                        However, our synchronization features may have separate information storage policies due to cloud synchronization capabilities.
                      </p>
                      <div className="bg-blue-500/20 border border-blue-300/30 rounded-xl p-4">
                        <p className="text-white/90 leading-relaxed">
                          <strong>Cloud Sync:</strong> When you enable data synchronization mode, you have allowed AdsManagement to store your data on the cloud system. This data is encrypted by the password you entered, and only you can decrypt it. We commit to absolutely not storing encryption passwords and absolutely cannot decrypt your data.
                        </p>
                      </div>
                      <p className="text-white/80 leading-relaxed">
                        Additionally, you can completely delete, edit saved data, and request deletion of your account from our system.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-lg flex items-center justify-center mr-3">
                        <Trash2 className="w-4 h-4 text-white" />
                      </span>
                      5. Deletion of Collected Information
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      You can completely delete data stored on our platforms yourself.
                    </p>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center mr-3">
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </span>
                      6. Important Notes
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      We may need to disclose personal information in special cases related to law or when your actions violate our policies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Service Terms, Cookie Policy, and Disclaimer Sections */}
              <div className="grid md:grid-cols-1 gap-12">
                
                {/* Service Terms */}
                <section className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Clipboard className="w-5 h-5 text-white" />
                    </span>
                    AdsManagement Service Terms
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      AdsManagement provides technology solutions for advertisers through software applications. Our solutions bring utilities and tools to help advertisers optimize time and resources in running advertisements on current platforms.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      You will not be charged for using AdsManagement products if they are free versions. Instead, you will pay when using advanced features we provide in those tools.
                    </p>
                    <p className="text-white/80 leading-relaxed">
                      We commit not to store any advertising data or advertising assets of users when using our products.
                    </p>
                  </div>
                </section>

                {/* Cookie Policy */}
                <section className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-white/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <Cookie className="w-5 h-5 text-white" />
                    </span>
                    Cookie Policy
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white/80 leading-relaxed">
                      This cookie policy will explain when and why cookies are used when you access our website or any website owned by AdsManagement.
                    </p>
                    <div className="bg-white/10 rounded-xl p-4">
                      <h4 className="text-lg font-semibold text-white mb-3">What are Cookies?</h4>
                      <p className="text-white/80 leading-relaxed">
                        Cookies are text files containing a small amount of information downloaded to your device when you visit our website. Cookies are used to help make website navigation more efficient, remember your preferences, and improve user experience.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Disclaimer */}
                <section className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl p-8 border border-white/30">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <span className="w-10 h-10 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <Scale className="w-5 h-5 text-white" />
                    </span>
                    Disclaimer
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Payment Methods & Refund Policy</h4>
                      <p className="text-white/80 leading-relaxed">
                        AdsManagement does not accept refunds for customers in any form to prevent individuals and organizations from exploiting to commit illegal acts.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-500/20 border border-yellow-300/30 rounded-xl p-6">
                      <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        Content Responsibility
                      </h4>
                      <p className="text-white/90 leading-relaxed">
                        <strong>Important:</strong> AdsManagement respects the privacy and security of customers' advertising content and assets, which is why we will not control customers' advertising content. Customers must ensure and commit not to use accounts for purposes that violate the law. We will not be responsible for any issues regarding customer advertising content.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

              {/* Contact Information */}
              <section className="bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl p-8 mt-12 border border-white/30">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </span>
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">AdsManagement</h4>
                    <p className="text-white/80 mb-1">Digital Marketing Solutions for Every Business</p>
                    <p className="text-white/80 mb-4">376 Moo 15, Samprao Subdistrict, Mueang Udon Thani District, Udon Thani Province 41000, Thailand</p>
                  </div>
                  <div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                          <Smartphone className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-white/90 font-medium">0792116879</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                          <Mail className="w-4 h-4 text-white" />
                        </span>
                        <span className="text-white/90 font-medium">hello@adsmanagement.co.th</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <a href="/" className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-lg font-bold shadow-xl transform hover:scale-105">
              ← Back to Home
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
} 