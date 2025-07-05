"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-black" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about
              technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div whileHover={{ y: -5 }} className="group">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm h-full group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+91 6294604475</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm h-full group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">shuklapritika.tech@gmail.com</p>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="group">
              <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm h-full group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center mb-4">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-gray-300">Connect with me</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
              <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Send a Message</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <div className="text-center">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8">
                    Send Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 