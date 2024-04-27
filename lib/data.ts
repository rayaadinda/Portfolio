import React from 'react'
import fromrayacameraImg from "@/public/fromrayacamera.png"
import rayminImg from "@/public/raymin.png"
import wordanalyticsImg from "@/public/wordanalytics.png"
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
    {
      name: "Home",
      hash: "#home",
    },
    {
      name: "About",
      hash: "#about",
    },
    {
      name: "Projects",
      hash: "#projects",
    },
    {
      name: "Skills",
      hash: "#skills",
    },
    {
      name: "Experience",
      hash: "#experience",
    },
    {
      name: "Contact",
      hash: "#contact",
    },
  ] as const;

  export const projectsData = [
    {
      title: "Fromrayacamera",
      description:  
        "Fromrayacamera is a website gallery of my journey while using an analog camera as well as being a final project in one of my courses",
      tags:["Html", "css", "Javascript", "figma"],
      imageUrl: fromrayacameraImg,
  
    },
    {
      title: "Fromrayacamera",
      description:
        "Fromrayacamera is a website gallery of my journey while using an analog camera as well as being a final project in one of my courses",
      tags:["Html", "css", "Javascript", "figma"],
      imageUrl: rayminImg,

  
    },

    {
      title: "Fromrayacamera",
      description:
        "Fromrayacamera is a website gallery of my journey while using an analog camera as well as being a final project in one of my courses",
      tags:["Html", "css", "Javascript", "figma"],
      imageUrl: wordanalyticsImg,
  
    },
  ] as const;

  export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Git",
    "Tailwind",
    "Framer Motion",
    "Figma",
    "C++",
    "Java",
    "MySql"
  ] as const;

  export const experiencesData = [
    {
      title: "Graduated bootcamp",
      location: "Miami, FL",
      description:
        "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
      icon: React.createElement(LuGraduationCap),
      date: "2019",
    },
    {
      title: "Front-End Developer",
      location: "Orlando, FL",
      description:
        "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
      icon: React.createElement(CgWorkAlt),
      date: "2019 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Houston, TX",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2021 - present",
    },
  ] as const;
  
  