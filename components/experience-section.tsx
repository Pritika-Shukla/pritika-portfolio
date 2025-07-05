"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CardContainer, CardItem } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ExternalLink } from "lucide-react"

const experiences = [
  {
    title: "Software Developer Intern",
    company: "ConvertPal.io",
    period: "Dec 2024 - Present",
    achievements: [
      "Reduced server downtime by 30% with a production-ready VPS, automated deployments, and security hardening",
      "Designed and implemented a scalable user interface, improving performance by 25%",
      "Implemented API rate limiting, preventing 40% unauthorized access attempts, and conducted extensive stress-tests and penetration tests to enhance system security and stability",
    ],
  },
  {
    title: "Front-End Developer Intern",
    company: "Good Game Theory",
    period: "October 2024 - January 2025",
    achievements: [
      "Developed the Money Mind Stock Landing Page, improving performance and cutting load time by 30%",
      "Increased user engagement by 35% by developing an interactive PWA with quizzes, improving retention rates",
      "Developed a game-based website integrated with a backend service that extracts data from YouTube videos to generate quizzes, incorporating animations that enhanced user interaction by 40%",
      "Mentored junior developers in ReactJS, improving code quality and adherence to best practices, reducing code review issues by 25%",
    ],
  },
]

const projects = [
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
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-purple-950/20" />
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl" />
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
              My Work
            </div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Experience & Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A showcase of my professional experience and key projects I've developed.
            </p>
          </div>

          {/* Work Experience */}
          <div className="mb-20">
            <h3 className="text-2xl font-semibold mb-8 text-center">Work Experience</h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-blue-500/50 transform md:translate-x-px" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative mb-12 md:mb-24 ${
                    index % 2 === 0 ? "md:pr-12 md:text-right md:ml-0 md:mr-auto" : "md:pl-12 md:ml-auto md:mr-0"
                  } md:w-1/2`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "left-0 md:right-0 md:left-auto md:-mr-3.5" : "left-0 md:-ml-3.5"
                    } w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center`}
                  >
                    <div className="w-3 h-3 rounded-full bg-black" />
                  </div>

                  <div className="ml-10 md:ml-0">
                    <div className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full mb-2">
                      {exp.period}
                    </div>
                    <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                    <p className="text-gray-300 mb-4">{exp.company}</p>

                    <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm">
                      <div className="bg-black/60 backdrop-blur-sm rounded-xl p-5">
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-purple-400 mt-1.5">•</span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <div className="p-1 rounded-2xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm h-full group hover:from-purple-500/30 hover:to-blue-500/30 transition-all duration-300">
                    <CardContainer className="bg-black/60 backdrop-blur-sm border-0 h-full">
                      <CardItem className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-semibold">{project.title}</h4>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{project.period}</span>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{project.description}</p>

                        <ul className="space-y-1 mb-4">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-gray-400 text-sm flex items-start gap-2">
                              <span className="text-purple-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-auto pt-4">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} className="bg-white/10 hover:bg-white/20 text-white text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-6 flex justify-end">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-300 hover:text-white hover:bg-white/10"
                          >
                            <span className="mr-1">View Details</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Button>
                        </div>
                      </CardItem>
                    </CardContainer>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 