"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Database, GraduationCap } from "lucide-react"

interface AboutSectionProps {
  aboutY: any
}

// Stats Card Component
function StatsCard({ title, value, icon }: { title: string; value: string; icon: React.ReactNode }) {
  return (
    <motion.div whileHover={{ y: -5 }} className="group">
      <div className="p-1 rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
        <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3">{icon}</div>
          <div className="text-2xl font-bold mb-1">{value}</div>
          <div className="text-sm text-gray-400">{title}</div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutSection({ aboutY }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
     

      <motion.div className="container mx-auto px-4 relative z-10" style={{ y: aboutY }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full mb-4">
                About Me
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Passionate Software Developer
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate Software Developer and Full-Stack Engineer currently pursuing my Bachelor's in
                  Computer Applications. With expertise in modern web technologies like React.js, Next.js, and
                  Node.js, I specialize in building scalable, high-performance applications.
                </p>
                <p>
                  I have hands-on experience in reducing server downtime, improving user engagement, and implementing
                  secure authentication systems. My goal is to create innovative solutions that enhance user
                  experience and drive business growth.
                </p>
                <div className="pt-4">
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">Next.js</Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">React</Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">Node.js</Badge>
                    <Badge className="bg-white/10 hover:bg-white/20 text-white">TypeScript</Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <div className="relative">
                {/* Stats cards */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-2 gap-4"
                >
                  <StatsCard title="Experience" value="2+ Years" icon={<Briefcase className="w-5 h-5" />} />
                  <StatsCard title="Projects" value="5+" icon={<Code className="w-5 h-5" />} />
                  <StatsCard title="Technologies" value="15+" icon={<Database className="w-5 h-5" />} />
                  <StatsCard title="Education" value="BCA" icon={<GraduationCap className="w-5 h-5" />} />
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
} 