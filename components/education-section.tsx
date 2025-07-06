"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap } from "lucide-react"

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
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
              My Education
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Academic Background
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm group hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-8">
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-semibold mb-2">Bachelor of Computer Applications</h3>
                      <p className="text-gray-300 mb-4">MAKAUT University</p>

                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span>Aug 2023 - Jul 2026</span>
                        </div>

                        <div className="px-3 py-1 bg-white/10 rounded-full text-sm">
                          SGPA: <span className="font-semibold text-white">8.81</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/10">
                    <p className="text-gray-300">
                      Focusing on computer science fundamentals, software development, and modern web technologies.
                      Developing practical skills through project-based learning and industry-relevant coursework.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 