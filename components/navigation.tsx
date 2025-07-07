import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconMail,
  IconHome,
  IconUser,
  IconCode,
  IconBriefcase,
  IconSchool,
  IconStack,
} from "@tabler/icons-react";

export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Skills",
      icon: (
        <IconStack className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  
  const handleItemClick = (item: any) => {
    const sectionMap: { [key: string]: string } = {
      "Home": "hero",
      "About": "about",
      "Skills": "skills",
      "Experience": "experience",
      "Projects": "projects",
      "Contact": "contact",
    };
    
    const sectionId = sectionMap[item.title];
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };
  
  return (
    <div className="fixed z-50 top-8 left-1/2 transform -translate-x-1/2">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
        onItemClick={handleItemClick}
      />
    </div>
  );
}
