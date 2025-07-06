"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TooltipProvider } from "@/components/ui/tooltip"

// Import components
import { Navigation } from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progressRef = useRef(null)
  const scrollProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Parallax effects
  const heroTextY = useTransform(scrollYProgress, [0, 0.2], [0, -100])
  const heroImageY = useTransform(scrollYProgress, [0, 0.2], [0, -50])
  const aboutY = useTransform(scrollYProgress, [0.1, 0.3], [100, 0])
  const skillsY = useTransform(scrollYProgress, [0.3, 0.5], [100, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <TooltipProvider>
      <div className="">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gray-700 z-50"
          style={{ scaleX: scrollProgress, transformOrigin: "0%" }}
          ref={progressRef}
        />

       <Navigation />

        {/* Hero Section */}
        <HeroSection
          scrollToSection={scrollToSection}
          heroTextY={heroTextY}
          heroImageY={heroImageY}
        />
<AboutSection />
        {/* Skills Section */}
        <SkillsSection skillsY={skillsY} />

        {/* Experience Section */}
        <ExperienceSection />

      

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </div>
    </TooltipProvider>
  )
}
