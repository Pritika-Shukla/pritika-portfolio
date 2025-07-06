import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CardContainer, CardItem } from '@/components/ui/card'
import { Brain, ExternalLink, Github, Zap } from 'lucide-react'
import { Globe } from 'lucide-react'

const ProjectSection = () => {
    const projects = [
        {
          title: "DevTest",
          description: "Innovative platform combining real-time coding and video conferencing for technical interviews",
          achievements: [
            "Reduced technical interview time by 30%",
            "Implemented WebSockets for live collaboration",
            "Integrated Judge0 API for multi-language execution",
            "Used Auth0 for secure authentication",
          ],
          tech: ["Next.js", "WebSockets", "LiveKit", "Judge0", "Auth0"],
          github: "#",
          live: "#",
          icon: Zap,
        },
        {
          title: "Medium-Blog",
          description: "Scalable blogging platform with secure authentication and serverless architecture",
          achievements: [
            "Full-stack platform with JWT authentication",
            "Cloudflare Workers serverless backend",
            "PostgreSQL with Prisma ORM",
            "Type safety with Zod and TypeScript",
          ],
          tech: ["Next.js", "Cloudflare Workers", "PostgreSQL", "Prisma", "JWT"],
          github: "#",
          live: "#",
          icon: Globe,
        },
        {
          title: "ChatNest",
          description: "Real-time messaging platform with secure authentication and instant communication",
          achievements: [
            "Real-time messaging with WebSockets",
            "JWT-based access control",
            "Zustand state management",
            "MERN stack for scalability",
          ],
          tech: ["React", "Node.js", "WebSockets", "MongoDB", "Zustand"],
          github: "#",
          live: "#",
          icon: Brain,
        },
      ]
    
  return (
    <section id="projects" className="py-20 bg-black/50">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, performance
              optimization, and modern web technologies.
            </p>

            <div className="space-y-12">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Project Info */}
                  <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <project.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-500/20 text-purple-200 border-purple-500/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </Button>
                      <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  {/* Project Visual */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                    <CardContainer className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300">
                      <CardItem className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20"></div>
                          <div className="relative z-10 text-center">
                            <project.icon className="h-16 w-16 text-purple-300 mx-auto mb-4" />
                            <h4 className="text-xl font-semibold text-white mb-2">{project.title}</h4>
                            <p className="text-gray-300 text-sm px-4">{project.description}</p>
                          </div>
                          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
                            >
                              <Github className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="bg-black/20 backdrop-blur-sm text-white hover:bg-black/40"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardItem>
                    </CardContainer>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

export default ProjectSection
