"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Import actual logo components
import { Aws } from "@/public/logos/aws"
import { Azure } from "@/public/logos/azure"
import { Bash } from "@/public/logos/bash"
import { Docker } from "@/public/logos/docker"
import { Express } from "@/public/logos/express"
import { Git } from "@/public/logos/git"
import { Java } from "@/public/logos/java"
import { Javascript } from "@/public/logos/javascript"
import { Mongodb } from "@/public/logos/mongodb"
import { Next } from "@/public/logos/next"
import { Postgressql } from "@/public/logos/postgressql"
import { Python } from "@/public/logos/python"
import { React as ReactLogo } from "@/public/logos/react"
import { Redis } from "@/public/logos/redis"
import { Typescript } from "@/public/logos/typescript"
import { Prisma } from "@/public/logos/prisma"
import { Github } from "@/public/logos/github"
import { WebSockets } from "@/public/logos/websockets"
import { WebRTC } from "@/public/logos/webrtc"
import { Hono } from "@/public/logos/hono"
import { ReactNative } from "@/public/logos/reactnative"
import { Tailwind } from "@/public/logos/tailwind"
import { Bootstrap } from "@/public/logos/bootstrap"
import { Nativewind } from "@/public/logos/nativewind"
import { Framer } from "@/public/logos/framer"
import { Nodejs } from "@/public/logos/nodejs"

interface SkillsSectionProps {
  skillsY: any
}

// Define responsive pyramid structures - optimized for mobile
const pyramidSkills = {
  // Mobile: Better organized 2-column layout
  mobile: [
    [
      { name: "JavaScript", icon: "js" },
      { name: "TypeScript", icon: "ts" },
    ],
    [
      { name: "Python", icon: "py" },
      { name: "Java", icon: "java" },
    ],
    [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
    [
      { name: "React Native", icon: "reactnative" },
      { name: "Express.js", icon: "express" },
    ],
    [
      { name: "Node.js", icon: "nodejs" },
      { name: "Hono", icon: "hono" },
    ],
    [
      { name: "PostgreSQL", icon: "pg" },
      { name: "MongoDB", icon: "mongo" },
    ],
    [
      { name: "Redis", icon: "redis" },
      { name: "Prisma", icon: "prisma" },
    ],
    [
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
    ],
    [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
    ],
    [
      { name: "GitHub", icon: "github" },
      { name: "Bash", icon: "bash" },
    ],
    [
      { name: "WebSockets", icon: "websockets" },
      { name: "WebRTC", icon: "webrtc" },
    ],
    [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
    [
      { name: "NativeWind", icon: "nativewind" },
      { name: "Framer Motion", icon: "framer" },
    ],
    [{ name: "& More", icon: "more" }],
  ],
  // Tablet: Medium pyramid
  tablet: [
    [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
    ],
    [
      { name: "Docker", icon: "docker" },
      { name: "Bash", icon: "bash" },
      { name: "WebSockets", icon: "websockets" },
      { name: "WebRTC", icon: "webrtc" },
    ],
    [
      { name: "Hono", icon: "hono" },
      { name: "Express.js", icon: "express" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Prisma", icon: "prisma" },
    ],
    [
      { name: "PostgreSQL", icon: "pg" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Redis", icon: "redis" },
    ],
    [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "NativeWind", icon: "nativewind" },
    ],
    [
      { name: "Framer Motion", icon: "framer" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
    ],
    [
      { name: "React Native", icon: "reactnative" },
      { name: "TypeScript", icon: "ts" },
    ],
    [
      { name: "JavaScript", icon: "js" },
      { name: "Python", icon: "py" },
    ],
    [{ name: "Java", icon: "java" }],
    [{ name: "& More", icon: "more" }],
  ],
  // Desktop: Full pyramid
  desktop: [
    [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS", icon: "aws" },
      { name: "Azure", icon: "azure" },
      { name: "Docker", icon: "docker" },
      { name: "Bash", icon: "bash" },
    ],
    [
      { name: "WebSockets", icon: "websockets" },
      { name: "WebRTC", icon: "webrtc" },
      { name: "Hono", icon: "hono" },
      { name: "Express.js", icon: "express" },
      { name: "Node.js", icon: "nodejs" },
    ],
    [
      { name: "Prisma", icon: "prisma" },
      { name: "PostgreSQL", icon: "pg" },
      { name: "MongoDB", icon: "mongo" },
      { name: "Redis", icon: "redis" },
    ],
    [
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
      { name: "NativeWind", icon: "nativewind" },
      { name: "Framer Motion", icon: "framer" },
    ],
    [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "React Native", icon: "reactnative" },
    ],
    [
      { name: "TypeScript", icon: "ts" },
      { name: "JavaScript", icon: "js" },
    ],
    [
      { name: "Python", icon: "py" },
      { name: "Java", icon: "java" },
    ],
    [{ name: "& More", icon: "more" }],
  ],
}

// Helper for icons
const skillIcons: Record<string, React.ReactNode> = {
  js: <Javascript />,
  ts: <Typescript />,
  py: <Python />,
  java: <Java />,
  aws: <Aws />,
  azure: <Azure />,
  docker: <Docker />,
  react: <ReactLogo />,
  nextjs: <Next />,
  express: <Express />,
  mongo: <Mongodb />,
  pg: <Postgressql />,
  redis: <Redis />,
  git: <Git />,
  prisma: <Prisma />,
  github: <Github />,
  websockets: <WebSockets />,
  webrtc: <WebRTC />,
  hono: <Hono />,
  reactnative: <ReactNative />,
  tailwind: <Tailwind />,
  bootstrap: <Bootstrap />,
  nativewind: <Nativewind />,
  framer: <Framer />,
  bash: <Bash />,
  nodejs: <Nodejs />,
  more: <span className="text-xl">…</span>,
}

export default function SkillsSection({ skillsY }: SkillsSectionProps) {
  return (
    <section id="skills" className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 relative overflow-hidden">
      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" style={{ y: skillsY }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <div className="inline-block px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm rounded-full mb-4">
              My Toolbox
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto px-4 sm:px-0 text-sm sm:text-base">
              These are the languages, tools, and services I rely on to craft full-stack web applications with
              performance, scalability, and clean architecture in mind.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            {/* Mobile Pyramid (xs to sm) - Improved for touch */}
            <div className="block sm:hidden">
              {pyramidSkills.mobile.map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  className="flex flex-row justify-center gap-2 flex-wrap px-2 mb-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: rowIdx * 0.08,
                    staggerChildren: 0.1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {row.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className={cn(
                        "relative px-2 py-2.5 rounded-lg font-semibold text-white text-xs flex items-center gap-1.5 shadow-lg",
                        "backdrop-blur-sm border border-white/10",
                        "hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20",
                        "hover:border-blue-400/30 hover:shadow-blue-500/25 hover:shadow-xl",
                        "transition-all duration-300 ease-out cursor-pointer group",
                        "min-w-[120px] min-h-[44px] flex-1 max-w-[140px]", // Better touch targets
                      )}
                      style={{ zIndex: 1 }}
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.8,
                        rotateX: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: rowIdx * 0.08 + idx * 0.05,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{
                        y: -3,
                        scale: 1.03,
                        rotateY: 3,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.97,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm " />
                      <motion.span
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: rowIdx * 0.08 + idx * 0.05 + 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          rotate: 180,
                          scale: 1.1,
                          transition: { duration: 0.3, ease: "easeInOut" },
                        }}
                        className="group-hover:text-blue-300 transition-colors duration-300 flex-shrink-0"
                      >
                        {skillIcons[skill.icon] || <span className="text-sm">?</span>}
                      </motion.span>
                      <span className="group-hover:text-blue-100 transition-colors duration-300 text-center leading-tight">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Tablet Pyramid (sm to lg) */}
            <div className="hidden sm:block lg:hidden">
              {pyramidSkills.tablet.map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  className="flex flex-row justify-center gap-4 flex-wrap px-2 mb-3"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: rowIdx * 0.1,
                    staggerChildren: 0.1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {row.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className={cn(
                        "relative px-4 py-3 rounded-xl font-semibold text-white text-sm flex items-center gap-2 shadow-lg",
                        "backdrop-blur-sm border border-white/10",
                        "hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20",
                        "hover:border-blue-400/30 hover:shadow-blue-500/25 hover:shadow-xl",
                        "transition-all duration-300 ease-out cursor-pointer group",
                      )}
                      style={{ zIndex: 1 }}
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.8,
                        rotateX: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: rowIdx * 0.1 + idx * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{
                        y: -6,
                        scale: 1.06,
                        rotateY: 5,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm " />
                      <motion.span
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: rowIdx * 0.1 + idx * 0.1 + 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        className="group-hover:text-blue-300 transition-colors duration-300"
                      >
                        {skillIcons[skill.icon] || <span className="text-xl">?</span>}
                      </motion.span>
                      <span className="group-hover:text-blue-100 transition-colors duration-300 px-2">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Desktop Pyramid (lg and above) */}
            <div className="hidden lg:block">
              {pyramidSkills.desktop.map((row, rowIdx) => (
                <motion.div
                  key={rowIdx}
                  className="flex flex-row justify-center gap-6 flex-wrap px-2 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: rowIdx * 0.1,
                    staggerChildren: 0.1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {row.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      className={cn(
                        "relative px-6 py-3 rounded-xl font-semibold text-white text-lg flex items-center gap-2 shadow-lg",
                        "backdrop-blur-sm border border-white/10",
                        "hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20",
                        "hover:border-blue-400/30 hover:shadow-blue-500/25 hover:shadow-xl",
                        "transition-all duration-300 ease-out cursor-pointer group",
                      )}
                      style={{ zIndex: 1 }}
                      initial={{
                        opacity: 0,
                        y: 20,
                        scale: 0.8,
                        rotateX: -15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: rowIdx * 0.1 + idx * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      whileHover={{
                        y: -8,
                        scale: 1.08,
                        rotateY: 5,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }}
                      whileTap={{
                        scale: 0.95,
                        transition: { duration: 0.1 },
                      }}
                    >
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm " />
                      <motion.span
                        initial={{ rotate: -180, scale: 0 }}
                        whileInView={{ rotate: 0, scale: 1 }}
                        transition={{
                          duration: 0.6,
                          delay: rowIdx * 0.1 + idx * 0.1 + 0.2,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                          transition: { duration: 0.4, ease: "easeInOut" },
                        }}
                        className="group-hover:text-blue-300 transition-colors duration-300"
                      >
                        {skillIcons[skill.icon] || <span className="text-xl">?</span>}
                      </motion.span>
                      <span className="group-hover:text-blue-100 transition-colors duration-300 px-4">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
