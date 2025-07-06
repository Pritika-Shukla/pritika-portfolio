"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Linkedin, Zap, Target, Github } from "lucide-react";
import ScrambledText from "@/components/ui/scramble-text";

const AboutSection = () => {
  const { scrollYProgress } = useScroll();
  const aboutY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section id="about" className="">
      <div className="">
        <motion.div
          style={{ y: aboutY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center"
        >
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="w-full flex justify-center items-center max-w-8xl ">
            <div className="relative">
              {/* Top-left border */}
              <div className='absolute top-20 left-12 border-t-4 border-l-4 border-purple-200/30 rounded-tl-lg w-24 h-24'></div>
              {/* Bottom-right border */}
              <div className='absolute bottom-20  right-12 border-b-4 border-r-4 border-purple-200/30 rounded-br-lg w-24 h-24'></div>

              <ScrambledText
                className="prose prose-lg prose-invert"
                radius={150}
                duration={0.8}
                speed={0.3}
              >
                <div className="">
                  <p className="text-gray-300 text-base space-y-2">
                    I'm a{" "}
                    <span className="text-purple-400 font-semibold">
                      21-year-old software and Android developer
                    </span>{" "}
                    from India, currently working at{" "}
                    <span className="text-purple-400 font-semibold">
                      Concertpal.io
                    </span>{" "}
                    and actively taking on
                    <span className="text-purple-400 font-semibold">
                      {" "}
                      freelance projects
                    </span>
                    .
                  </p>
                  <p className="text-gray-300 text-base space-y-2">
                    I focus on building{" "}
                    <span className="text-purple-400 font-semibold">
                      clean, efficient, and user-friendly
                    </span>{" "}
                    digital experiences that actually work well — not just look
                    good. From turning raw ideas into working products to
                    fine-tuning performance and usability, I enjoy solving
                    real-world problems with code.
                  </p>
                  <p className="text-gray-300 text-base space-y-2">
                    Whether it's{" "}
                    <span className="text-purple-400 font-semibold">
                      front-end interfaces
                    </span>{" "}
                    or
                    <span className="text-purple-400 font-semibold">
                      {" "}
                      full-stack logic
                    </span>
                    , I aim to keep things simple, functional, and scalable.
                    When I'm not coding, I'm either exploring new tech,
                    contributing to open-source, or sipping coffee while
                    planning my next side project.
                  </p>
                  <p className="text-gray-300 text-base space-y-2">
                    I'm a big believer in{" "}
                    <span className="text-purple-400 font-semibold">
                      clean, maintainable code
                    </span>{" "}
                    and building things people enjoy using. Always open to new
                    challenges, especially when they involve building with
                    purpose and working with like-minded teams.
                  </p>
                </div>
              </ScrambledText>
            </div>
          </div>
          
        </motion.div>
      </div>
      
    </section>
  );
};

export default AboutSection;
