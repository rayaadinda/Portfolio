"use client"

import React, { memo } from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

const AboutText = memo(() => (
  <>
    <p className="mb-3">
      Currently a 6th-semester student at{" "}
      <span className="font-bold">Universitas Pamulang</span>, pursuing a degree in Computer Science. I'm passionate about software development, with a focus on mobile and web development.
    </p>
    <p className="mb-3">
      I'm currently interning at{" "}
      <span className="font-bold">Bangkit Academy</span> as a Mobile Developer, where I work with Kotlin to build Android applications. This experience has strengthened my understanding of mobile development principles and best practices.
    </p>
    <p>
      My technical journey spans both mobile and web development, allowing me to approach problems with a versatile perspective. I'm particularly interested in creating intuitive user experiences.
    </p>
  </>
))
AboutText.displayName = 'AboutText'

const About = memo(() => {
  const { ref } = useSectionInView("About")
  
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <AboutText />
    </motion.section>
  )
})
About.displayName = 'About'

export default About;
