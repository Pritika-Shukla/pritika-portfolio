import { motion } from 'framer-motion'
import { Mail, Twitter } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { Github } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { Download } from 'lucide-react'
import { CardContainer, CardItem } from './ui/card'
import { IconBrandDiscord } from '@tabler/icons-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-black/50">
    <div className="container mx-auto px-4 sm:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-center text-gray-400 text-base sm:text-lg mb-6 sm:mb-8"> I'm always open to new opportunities and collaborations.</p>
        <div className="w-full max-w-2xl mx-auto">
          <CardContainer className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
            <CardItem className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 md:gap-4">
                    <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Twitter className="h-5 w-5 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-sm md:text-sm">Twitter</p>
                      <p className="text-white text-base md:text-base truncate">shukla_pritika</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-4">
                    <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-sm md:text-sm">Email</p>
                      <p className="text-white text-base md:text-base truncate">pritikashukla21@gmail.com</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 md:gap-4">
                    <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Linkedin className="h-5 w-5 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-sm md:text-sm">LinkedIn</p>
                      <p className="text-white text-base md:text-base truncate">pritika-shukla-967350234</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 md:gap-4">
                    <div className="w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br from-gray-700 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <Github className="h-5 w-5 md:h-5 md:w-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-400 text-sm md:text-sm">GitHub</p>
                      <p className="text-white text-base md:text-base truncate">Pritika-Shukla</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-8 pt-6 md:pt-6 border-t border-purple-500/20">
                <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm md:text-base" onClick={() => window.open('https://discord.com/users/shukla_pritika', '_blank')}>
                    <IconBrandDiscord className="mr-2 h-4 w-4" />
                    Connect on Discord
                  </Button>
                  <Button
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent text-sm md:text-base"
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
