"use client"

import React, { useMemo } from "react"
import SectionHeading from "./section-heading"
import { useSectionInView } from "@/lib/hooks"
import { projectsData } from "@/lib/data"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Head from "next/head"

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5)

	const memoizedProjectCards = useMemo(
		() =>
			projectsData.map((project, index) => (
				<Link
					href={project.url || "#"}
					target="_blank"
					key={index}
					className="group relative bg-gray-100 hover:bg-white dark:bg-neutral-900 dark:hover:bg-black rounded-lg p-6 sm:p-8 md:p-10 transition-all duration-300 min-h-[700px] sm:min-h-[800px] flex flex-col"
				>
					<div className="flex-1">
						{/* Project Icon/Logo */}
						<div className="mb-6 sm:mb-8 flex items-center gap-4">
							<div className="dark:bg-white flex items-center justify-center">
								<Image
									src={project.logoUrl}
									alt={`${project.title} logo`}
									width={32}
									height={32}
									className="object-contain sm:w-10 sm:h-10"
								/>
							</div>
							<h3 className="text-2xl sm:text-4xl font-semibold tracking-tight">
								{project.title}
							</h3>
						</div>

						{/* Description */}
						<p className="text-lg text-gray-500 dark:text-gray-400  font-normal ">
							{project.description}
						</p>
					</div>

					{/* Project Images */}
					<motion.div
						className="relative h-[400px] sm:h-[500px] overflow-hidden rounded-lg mt-8"
						whileHover={{ y: -20 }}
						transition={{ duration: 0.3 }}
					>
						<Image
							src={project.imageUrl}
							alt={`${project.title} preview`}
							fill
							className="object-contain"
						/>
					</motion.div>

					{/* Arrow indicator */}
					<div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10">
						<div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center group-hover:bg-black group-hover:border-black dark:group-hover:bg-white dark:group-hover:border-white transition-all duration-300">
							<ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white dark:group-hover:text-black transition-colors" />
						</div>
					</div>
				</Link>
			)),
		[]
	)

	return (
		<section
			ref={ref}
			id="projects"
			className="scroll-mt-28 mb-28 px-4 sm:px-8 md:px-12"
		>
			<SectionHeading>My Projects</SectionHeading>
			<div className="grid grid-cols-1 gap-6 sm:gap-8 max-w-5xl mx-auto">
				{memoizedProjectCards}
			</div>
		</section>
	)
}
