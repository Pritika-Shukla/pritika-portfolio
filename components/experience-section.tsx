"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContainer, CardItem } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink, ChevronRight } from "lucide-react"

interface Experience {
  title: string
  company: string
  period: string
  achievements: string[]
}

interface Project {
  title: string
  period: string
  description: string
  achievements: string[]
  tags: string[]
}

const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "ConcertPal.io",
    period: "Dec 2024 - Present",
    achievements: [
      "Built a real-time voice cloning feature with speech-to-text and text-to-speech pipelines for live calls, handling low-latency audio processing across multiple concurrent streams",
      "Developed a cross-platform application serving 1,000+ concurrent daily users, managing multiple features with a focus on performance and reliability",
      "Built web scrapers that extracted and aggregated data from multiple sources in real-time",
      "Created a ticket comparison platform delivering sub-second price comparisons across different platforms to handle concurrent lookups at scale",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "YUGA",
    period: "March 2025 - July 2025",
    achievements: [
      "Rebuilt the entire frontend using Next.js and Tailwind CSS, delivering a fast, responsive UI that worked smoothly for live events",
      "Built a real-time scoring system with WebSockets, allowing judges to submit scores instantly with sub-second updates",
      "Created reusable UI components to support different yoga event formats, reducing duplication and simplifying future feature additions",
    ],
  },
  {
    title: "Frontend Intern",
    company: "Good Game Theory",
    period: "Oct 2024 - Jan 2025",
    achievements: [
      "Built an interactive PWA with quiz features that improved user engagement and retention",
      "Developed a game-based web platform integrated with a backend service that extracts data from YouTube videos to generate quizzes, with animations to improve user interaction",
      "Led a frontend team of 15 developers by organizing tasks, reviewing code, and maintaining consistent React.js coding standards",
    ],
  },
]

const projects: Project[] = [
  {
    title: "DevTest",
    period: "Aug 2024",
    description: "Innovative platform combining real-time coding and video conferencing",
    achievements: [
      "Developed a full-stack blogging platform, reducing technical interview time by 30%",
      "Implemented WebSockets for live collaboration, voice typing, and chat, boosting user engagement by 40%",
      "Integrated Jitsi API for multi-language code execution and used Auth for secure authentication",
      "Optimized performance with Next.js, LiveKit, and Tailwind CSS, ensuring a smooth user experience",
    ],
    tags: ["Next.js", "WebSockets", "LiveKit", "Tailwind CSS"],
  },
  {
    title: "Medium Blogging Platform",
    period: "Aug 2024",
    description: "Secure blogging platform with authentication",
    achievements: [
      "Developed full-stack blogging platform with secure JWT authentication and full CRUD functionality",
      "Utilized Cloudflare Workers for high performance, serverless backend with PostgreSQL via Prisma",
      "Ensured robust API validation and type safety using Zod and TypeScript",
    ],
    tags: ["Cloudflare Workers", "PostgreSQL", "Prisma", "JWT"],
  },
  {
    title: "Chatbot",
    period: "Aug 2024",
    description: "Real-time messaging platform with secure authentication and live chat",
    achievements: [
      "Developed a real-time messaging platform with WebSockets, enabling instant communication and user tracking",
      "Secured authentication with JWT-based access control for private conversations",
      "Optimized performance using Zustand for state management and MERN stack for scalability",
    ],
    tags: ["WebSockets", "JWT", "Zustand", "MERN"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-r from-purple-900/20 to-black/50">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                <CardContainer className="w-full">
                  <CardItem className="w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm rounded-lg p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-purple-400" />
                      <span className="text-purple-400 font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-400 mb-4">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <ChevronRight className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardItem>
                </CardContainer>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 