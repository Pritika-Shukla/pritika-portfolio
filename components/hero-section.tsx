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
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "mailto:pritika@example.com", label: "Email" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];
  return (
    <SectionWrapper className=" md:mt-24 pt-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        <div className="relative z-10 flex flex-col justify-start p-6 ">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-white">Hi, I'm</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Pritika Shukla
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 via-blue-200 to-transparent rounded-full mb-6" />
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-xl text-white/80 font-semibold tracking-wide mb-1">
              Software Developer{" "}
              <span className="text-purple-200 font-bold">|</span> Freelancer
            </p>
            <p className="text-lg md:text-xl font-medium mb-1">
              <span className="text-green-200 font-semibold">
                Web + Android ninja.
              </span>
            </p>
            <p className="text-lg md:text-xl text-white/70 font-normal italic">
              No bugs,{" "}
              <span className="text-blue-200 font-semibold">
                just features.
              </span>
            </p>
          </div>
          {/* Social Icons Row */}
          <div className="flex py-4 space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors duration-300" />
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {social.label}
                </div>
              </a>
            ))}
          </div>
          {/* End Social Icons Row */}
          <Discord
            userId="1249368864064540794"
            userName="shukla_pritika"
            activityDetailClass="dark:text-cyan-300"
            activityDescriptionClass="dark:text-[#ffbe6f]"
            progressBarClassName="dark:bg-[#ffbe6f]"
            localTimeClass="dark:text-green-500"
          />
        </div>

        <div className="absolute top-0 right-0 bottom-0">
          <div className="flex justify-center items-center h-fit py-9 w-full ">
            <div className="relative cursor-pointer animate-float hidden md:block">
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
                        className="rounded-[1rem] w-[400px] h-[400px] cursor-pointer object-cover"
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
