import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { CardContainer, CardItem } from './ui/card'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black/50">
    <div className="container mx-auto px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="max-w-2xl mx-auto">
          <CardContainer className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
            <CardItem className="p-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">+91-6294604075</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">shuklapritika.tech@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">LinkedIn</p>
                      <p className="text-white">pritika-shukla-967350234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-purple-700 rounded-full flex items-center justify-center">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">GitHub</p>
                      <p className="text-white">pritika-shukla</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-purple-500/20">
                <div className="flex justify-center gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </div>
              </div>
            </CardItem>
          </CardContainer >
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default ContactSection
