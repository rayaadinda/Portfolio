"use client"

import React from "react"
import SectionHeading from "./section-heading"
import { projectsData } from "@/lib/data"
import Project from "./project"
import { useSectionInView } from "@/lib/hooks"

export default function Projects() {
	const { ref } = useSectionInView("Projects", 0.5)
	return (
		<section ref={ref} id="projects" className="scroll-mt-36 mb-36">
			<div className="flex items-center justify-between mb-4 px-4 sm:px-0">
				<h2 className="text-base font-normal text-black dark:text-white/70">Projects</h2>
				<a href="#" className="text-sm text-black dark:text-white/60 flex items-center gap-1">
					View All
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
					</svg>
				</a>
			</div>
			<div className="flex flex-col gap-3 px-4 sm:hidden">
				{projectsData.map((project, index) => (
					<div key={index} className="bg-white dark:bg-white/10 rounded-md border border-black/5 dark:border-white/10">
						<Project {...project} />
					</div>
				))}
			</div>
			<div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projectsData.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	)
}
