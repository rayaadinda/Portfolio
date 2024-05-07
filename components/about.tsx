"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks"

export default function About() {
	const { ref } = useSectionInView("About")
	return (
		<motion.section
			className="mb-28 max-w-[45rem] text-center leading-8  sm:mb-40 scroll-mt-28"
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About Me</SectionHeading>
			<p className="mb-3">
				I'm currently student at{" "}
				<span className="font-bold">Universitas Pamulang</span>, this year is my
				4th semester. I'm interested in Frontend{" "}
				<span className="font-medium">
					{" "}
					and i wish i can become a full-stack web development
				</span>
				. <span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is <span className="font-medium">React and Next js</span> I am always
				looking to learn new technologies. I am currently looking for a{" "}
				<span className="font-medium">Junior Frontend Web Developer</span>
			</p>
		</motion.section>
	)
}
