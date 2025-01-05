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
			className="group last:mb-0"
		>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<section className="flex items-center p-4 sm:hidden">
					<div className="w-12 h-12 rounded-md bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
						<Image
							src={imageUrl}
							alt="Project"
							quality={95}
							className="w-6 h-6 object-contain"
						/>
					</div>
					<div className="flex-1">
						<h3 className="font-medium text-[15px] text-black dark:text-white">{title}</h3>
						<p className="text-gray-500 dark:text-white/60 text-sm">{tags.slice(0, 4).join(", ")}</p>
					</div>
					<div>
						<svg className="w-5 h-5 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</div>
				</section>

				<section className="relative h-[400px] rounded-md overflow-hidden group hidden sm:block">
					<Image
						src={imageUrl}
						alt="Project"
						quality={95}
						className="w-full h-full object-cover object-center brightness-[0.3] group-hover:scale-105 group-hover:brightness-[0.2] transition duration-300"
					/>
					<div className="absolute inset-0 flex flex-col justify-end p-8">
						<h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
						<p className="text-white/80 mb-6 line-clamp-3 text-lg">
							{description}
						</p>
						<div className="flex justify-between items-center">
							<ul className="flex flex-wrap gap-2">
								{tags.map((tag, index) => (
									<li
										className="bg-white/10 backdrop-blur-sm px-4 py-1 text-sm text-white rounded-full"
										key={index}
									>
										{tag}
									</li>
								))}
							</ul>
							<button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition">
								View Project
							</button>
						</div>
					</div>
				</section>
			</a>
		</motion.div>
	)
}
