"use client"

import { projectsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { StaticImageData } from "next/image"

type ProjectProps = {
	title: string
	description: string
	tags: readonly string[]
	imageUrl: StaticImageData
	url?: string
}

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	url,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	})
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group mb-3 sm:mb-8 last:mb-0"
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<section className="bg-gray-100 h-[400px] border border-black/5 rounded-lg overflow-hidden hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col">
					<div className="h-48 overflow-hidden">
						<Image
							src={imageUrl}
							alt="Project"
							quality={95}
							className="w-full h-full object-cover object-center transition group-hover:scale-105"
						/>
					</div>
					<div className="flex flex-col p-4 flex-grow">
						<h3 className="text-2xl font-semibold mb-2">{title}</h3>
						<p className="text-gray-700 dark:text-white/70 mb-4 line-clamp-3">
							{description}
						</p>
						<div className="mt-auto">
							<ul className="flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<li
										className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
										key={index}
									>
										{tag}
									</li>
								))}
							</ul>
						</div>
					</div>
				</section>
			</a>
		</motion.div>
	)
}
