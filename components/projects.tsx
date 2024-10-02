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
			<SectionHeading>My Projects</SectionHeading>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
				{projectsData.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	)
}
