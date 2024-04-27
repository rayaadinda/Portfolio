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
      title: "SMKN 58 JAKARTA",
      location: "Cipayung, Jakarta Timur",
      description:
        "I graduated after 3 years of studying in Senior High Scholl",
      icon: React.createElement(LuGraduationCap),
      date: " 2019 - 2021",
    },
    {
      title: "Universitas Pamulang",
      location: "Pamulang, Tanggerang Selatan",
      description:
        "I'm now a Computer Science Student at Universitas Pamulang. Currently i'm in 4th Semester.",
      icon: React.createElement(LuGraduationCap),
      date: " 2022 - present",
    },
  ] as const;
  
  