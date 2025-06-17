'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Clock, Shield } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "376 Moo 15, Samprao Subdistrict",
        "Mueang Udon Thani District",
        "Udon Thani Province 41000, Thailand"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["0792116879"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@adsmanagement.co.th"],
      color: "from-indigo-500 to-indigo-600"
    }
  ]

  const commitments = [
    {
      icon: Shield,
      text: "Agency accounts - Platform partners"
    },
    {
      icon: CheckCircle,
      text: "Advertising information security"
    },
    {
      icon: Clock,
      text: "Clear account origins"
    }
  ]

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-purple-400/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-blue-400/30 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute bottom-32 left-40 w-8 h-8 bg-cyan-400/30 rounded-full animate-float animation-delay-2000"></div>
        
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 text-white font-medium mb-8 border border-white/20">
            <MessageCircle className="w-5 h-5 text-purple-400" />
            <span>GET IN TOUCH</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get Consultation
            </span>
            <br />
            <span className="text-white">Now</span>
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your business? Let&apos;s discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-white mb-2">Send us a message</h4>
                <p className="text-gray-400">We&apos;ll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-white placeholder-gray-400 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your project goals, target audience, and budget..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg group hover:scale-105"
                >
                  <span>Send Message</span>
                  <Send size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <div key={index} className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-white mb-2">{info.title}</h5>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-300 leading-relaxed">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Commitments */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                Our Commitments
              </h4>
              
              <div className="space-y-4">
                {commitments.map((commitment, index) => {
                  const IconComponent = commitment.icon
                  return (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 font-medium">{commitment.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h5 className="text-lg font-bold text-white">Quick Response</h5>
              </div>
              <p className="text-gray-300">
                We typically respond to all inquiries within 2-4 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 