"use client"

import { motion } from "framer-motion"
import {  Github, Linkedin, Mail } from "lucide-react"
import { IconBrandDiscord, IconBrandTwitter } from '@tabler/icons-react'
export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="text-xl font-bold bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
          >
            Pritika Shukla
          </motion.div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Pritika-Shukla"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/pritika-shukla-967350234/"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="mailto:pritikashukla21@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://discord.com/users/1249368864064540794"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <IconBrandDiscord className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://x.com/shukla_pritika"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <IconBrandTwitter className="w-5 h-5" />      
            </motion.a>
          </div>
        </div>

        
      </div>
    </footer>
  )
} 