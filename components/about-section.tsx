"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Phone, Mail, Linkedin, Zap, Target, Github } from 'lucide-react'

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
     <section id="about" className="py-20 bg-gradient-to-r from-purple-900/20 to-black/50">
        <div className="container mx-auto px-6">
          <motion.div
            style={{ y: aboutY }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Left Column - Story */}
              <div className="lg:col-span-2 space-y-6">
                <div className="prose prose-lg prose-invert">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a <span className="text-purple-400 font-semibold">21-year-old software and Android developer</span> from India, 
                    currently working at <span className="text-purple-400 font-semibold">Concertpal.io</span> and actively taking on 
                    <span className="text-purple-400 font-semibold"> freelance projects</span>.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    I focus on building <span className="text-purple-400 font-semibold">clean, efficient, and user-friendly</span> digital 
                    experiences that actually work well — not just look good. From turning raw ideas into working products 
                    to fine-tuning performance and usability, I enjoy solving real-world problems with code.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    Whether it's <span className="text-purple-400 font-semibold">front-end interfaces</span> or 
                    <span className="text-purple-400 font-semibold"> full-stack logic</span>, I aim to keep things simple, 
                    functional, and scalable. When I'm not coding, I'm either exploring new tech, contributing to open-source, 
                    or sipping coffee while planning my next side project.
                  </p>

                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a big believer in <span className="text-purple-400 font-semibold">clean, maintainable code</span> and 
                    building things people enjoy using. Always open to new challenges, especially when they involve building 
                    with purpose and working with like-minded teams.
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Zap className="h-5 w-5 text-purple-400" />
                      What I Do
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Full-Stack Web Development
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Performance Optimization
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Cloud Architecture
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Team Mentoring
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                      <Target className="h-5 w-5 text-pink-400" />
                      My Focus
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        Modern JavaScript Frameworks
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        Scalable System Design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        User Experience Design
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                        Continuous Learning
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default AboutSection
