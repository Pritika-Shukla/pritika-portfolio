"use client";

import SectionWrapper from "./ui/section-wrapper";
import Image from "next/image";
import { CardContainer, CardItem } from "./ui/card";
import Link from "next/link";
import { Discord } from "./ui/discord";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Pritika-Shukla", label: "GitHub" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=pritikashukla21@gmail.com&su=Hello from your portfolio&body=Hi Pritika, I saw your portfolio and would like to connect!", label: "Email" },
    { icon: Twitter, href: "https://x.com/shukla_pritika", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pritika-shukla-967350234/", label: "LinkedIn" },
  ];
  return (
    <SectionWrapper className="md:min-h-[90vh] flex items-center md:pt-24 pt-16 ">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 md:w-64 md:h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full">
        <div className="relative z-10 flex flex-col justify-start p-4 md:p-6 max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Pritika Shukla
            </span>
          </h1>

          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-300 via-blue-200 to-transparent rounded-full mb-4 md:mb-6" />
          <div className="flex flex-col gap-1 md:gap-2">
            <p className="text-base sm:text-lg md:text-xl text-white/80 font-semibold tracking-wide mb-1">
              Software Developer{" "}
              <span className="text-purple-200 font-bold">|</span> Freelancer
            </p>
            <p className="text-base sm:text-lg md:text-xl font-medium mb-1">
              <span className="text-green-200 font-semibold">
                Web + Android ninja.
              </span>
            </p>
            <p className="text-base sm:text-lg md:text-xl text-white/70 font-normal italic">
              No bugs,{" "}
              <span className="text-blue-200 font-semibold">
                just features.
              </span>
            </p>
          </div>
          {/* Social Icons Row */}
          <div className="flex py-3 md:py-4 space-x-4 md:space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative p-2 md:p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
          {/* End Social Icons Row */}
          <div className="">
            <Discord
              userId="1249368864064540794"
              userName="shukla_pritika"
              activityDetailClass="dark:text-cyan-300"
              activityDescriptionClass="dark:text-[#ffbe6f]"
              progressBarClassName="dark:bg-[#ffbe6f]"
              localTimeClass="dark:text-green-500"
            />
          </div>
        </div>

        {/* Image - Hidden on small screens, visible on medium and up */}
        <div className="absolute top-0 right-0 bottom-0 hidden md:block">
          <div className="flex justify-center items-center h-full w-full">
            <div className="relative cursor-pointer animate-float">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <CardContainer className="cursor-pointer">
                  <Link href="#" target="_blank">
                    <CardItem>
                      <Image
                        src="/profile.jpg"
                        alt="Pritika Shukla"
                        width={400}
                        height={500}
                        className="rounded-[1rem] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] cursor-pointer object-cover mb-4"
                      />
                    </CardItem>
                  </Link>
                </CardContainer>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
