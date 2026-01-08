import { cn } from "@/lib/utils";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[minmax(20rem,auto)] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  achievements,
  live,
  github,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  achievements?: string[];
  live?: string;
  github?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 p-6 bg-black/50 border border-white/[0.2] justify-between flex flex-col space-y-4 min-h-[20rem] overflow-hidden",
        className
      )}
    >
      <div className="group-hover/bento:translate-x-2 transition duration-200 flex flex-col flex-1 min-h-0 overflow-hidden">
        <div className="font-sans font-bold text-white mb-4 text-xl break-words">
          {title}
        </div>
        
        {achievements && achievements.length > 0 && (
          <div className="space-y-2 mb-4 overflow-y-auto">
            {achievements.map((achievement, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="font-sans font-normal text-gray-300 text-sm break-words leading-relaxed">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        )}
        
        <div className="font-sans font-normal text-gray-400 text-sm mb-4 flex-1 overflow-y-auto break-words leading-relaxed">
          {description}
        </div>
        
        {(live || github) && (
          <div className="mt-auto flex-shrink-0 flex gap-2">
            {github && (
              <Button
                size="sm"
                variant="outline"
                className="bg-gray-800 hover:bg-gray-700 text-white border-gray-700 flex-1 sm:flex-initial"
                onClick={() => window.open(github, '_blank')}
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            )}
            {live && (
              <Button
                size="sm"
                variant="outline"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 flex-1 sm:flex-initial"
                onClick={() => window.open(live, '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[minmax(20rem,auto)]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          achievements={item.achievements}
          className={item.className}
          live={item.live}
          github={item.github}
        />
      ))}
    </BentoGrid>
  );
}
const items = [
    {
        title: "NovaAI",
        description: "An AI-powered interview practice platform with real-time voice interviews and automated feedback",
        achievements: [
          "Real-time voice interviews with live transcripts and performance tracking",
          "Resume analysis and automated feedback generation using OpenAI",
          "PDF reports with detailed performance metrics and responsive dashboard",
          "Integrated Vapi.ai for voice interactions and Supabase for data management",
        ],
        className: "md:col-span-1",
        github: "https://github.com/Pritika-Shukla/NovaAI",
        live: "https://nova.pritika.xyz/",
      },
      {
        title: "StockPulse",
        description: "A stock market tracking and analysis web application with real-time quotes and AI-powered insights",
        achievements: [
          "Real-time stock quotes, interactive charts using TradingView widgets, and personalized watchlists",
          "Comprehensive dashboards with stock detail pages and market news integration",
          "AI-powered daily news summary emails delivered via OpenAI and Inngest",
          "Secure authentication with Clerk and scalable data storage using Prisma with MongoDB",
        ],
        className: "md:col-span-2",
        github: "https://github.com/Pritika-Shukla/StockPulse",
        live: "https://stockpulse.pritika.xyz/",
      },
  {
    title: "V3CN",
    description: "Next-gen UI library for portfolios and design systems with interactive components and seamless documentation",
    achievements: [
      "Custom-built interactive components including Discord widget and 3D-hover cards",
      "Powered by Next.js + Nextra with MDX for seamless documentation integration",
      "Includes npx v3cn add utility for easy component scaffolding",
      "Open-source with 44 stars, 11 forks under GNU GPL v3.0",
    ],
    className: "md:col-span-2",
    github: "https://github.com/VineeTagarwaL-code/v3cn-docs",
    live: "https://v3cn.vineet.pro/",
  },
  {
    title: "DevTest",
    description: "A collaborative interview tool blending real-time coding with video conferencing",
    achievements: [
      "Built a full-stack platform with real-time code editor and video chat integration",
      "Used WebSockets for collaborative coding, chat, and live voice typing",
      "Integrated Judge0 API to support multi-language code execution",
      "Auth0 used for secure login and session control",
    ],
    className: "md:col-span-1",
    github: "https://github.com/VineeTagarwaL-code/DevTest",
    live: "https://github.com/VineeTagarwaL-code/DevTest",
  },
  
  
];
