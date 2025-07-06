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
    title: "Software Developer",
    company: "Concertpal.io",
    period: "Dec 2024 - Present",
    achievements: [
      "Reduced server downtime by 30% by setting up a production-ready VPS with automated CI/CD deployments and robust security hardening practices",
      "Designed and implemented a highly scalable and optimized UI, leading to a 25% improvement in performance and smoother user experience",
      "Built secure backend services with API rate limiting, blocking 40% of unauthorized access attempts; performed stress and penetration testing to strengthen system reliability",
      "Spearheaded the development of two mobile apps using React Native, Expo, and NativeWind as company side projects, focusing on mobile-first design and consistent UI",
    ],
  },
  {
    title: "Frontend Developer",
    company: "YUGA",
    period: "April 2025 - Present",
    achievements: [
      "Redesigned and rebuilt the entire frontend UI of the YUGA platform within 1.5 weeks, meeting a critical event deadline and enhancing usability across devices",
      "Integrated WebSocket-based real-time scoring logic, improving the responsiveness and accuracy of live judge evaluations during competitions",
      "Implemented and optimized features for traditional, rhythmic, and artistic yoga events, making the platform scalable for diverse event formats",
      "Continuously improved the UI/UX of the platform with micro-interactions and responsive layouts, increasing visual appeal and user engagement",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Good Game Theory",
    period: "October 2024 - January 2025",
    achievements: [
      "Built and deployed the Money Mafia Book Landing Page, achieving a 30% faster load time and significantly improving SEO and Lighthouse scores",
      "Developed an interactive Progressive Web App (PWA) with gamified quizzes, increasing user engagement by 35% and improving session retention",
      "Engineered a game-based learning platform with backend integration to automatically generate quizzes from YouTube video data, enhanced with smooth animations, boosting user interaction by 40%",
      "Mentored junior frontend developers in React.js, promoting best practices and reducing code review issues by 25% through clean code principles and modular architecture",
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