"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

	return (
		<section
			ref={ref}
			id="home"
			className="pt-2 pb-14 flex items-center justify-center"
		>
			<div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 gap-8 sm:gap-24">
				<div className="flex flex-col items-center sm:items-start max-w-xl text-center sm:text-left">
					<div className="flex items-center gap-3 text-base mb-6">
						<span className="text-black font-medium">• Software Engineer</span>
					</div>

					<motion.h1
						className="text-4xl sm:text-5xl font-semibold mb-4"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
					>
						I'm Raya Adinda
					</motion.h1>

					<motion.p
						className="text-gray-600/80 text-base sm:text-lg mb-6"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
					>
						Frontend developer from Jakarta, ID.<br />
						Currently studying at Universitas Pamulang.
					</motion.p>

					<motion.div
						className="flex items-center gap-3"
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
					>
						<Link
							href="#contact"
							className="bg-black text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-sm font-medium hover:bg-gray-900 transition flex items-center gap-2"
							onClick={() => {
								setActiveSection("Contact");
								setTimeOfLastClick(Date.now());
							}}
						>
							<span>+</span> Hire Me
						</Link>
						<div className="flex gap-2">
							<Link
								href="https://github.com/rayaadinda"
								target="_blank"
								className="bg-gray-100 p-2.5 rounded-lg text-gray-700 hover:text-gray-950 transition"
							>
								<FaGithub size={20} />
							</Link>
							<Link
								href="https://linkedin.com/in/rayaadinda"
								target="_blank"
								className="bg-gray-100 p-2.5 rounded-lg text-gray-700 hover:text-gray-950 transition"
							>
								<FaLinkedin size={20} />
							</Link>
						</div>
					</motion.div>
				</div>

				<div className="flex flex-col items-center gap-3">
					<div className="bg-[#E8FBE8] text-emerald-600 px-3 py-0.5 rounded-full text-[13px]">
						AVAILABLE FOR WORK
					</div>
					<motion.div
						className="w-32 h-32 sm:w-48 sm:h-48 rounded-full"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.3 }}
					>
						<div className="rounded-full overflow-hidden w-full h-full p-1">
							<Image
								src="/avatar.png"
								alt="Raya's avatar"
								width={300}
								height={300}
								className="rounded-full object-cover"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
