"use client"
import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5)
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
	return (
		<section
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div className="relative"></div>
			</div>
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				ref={ref}
				id="home"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				<span className="font-bold">Hello, I'm Raya Adinda.</span> undergraduate
				student <span className="font-bold">at Universitas Pamulang</span> I
				enjoy building <span className="italic">Website & Apps</span>. With
				focus on <span className="underline">Frontend</span>.
			</motion.h1>

			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center
      gap-2 px-4 text-lg font-medium "
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
			>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950
        active:scale-105 transition"
					onClick={() => {
						setActiveSection("Contact")
						setTimeOfLastClick(Date.now())
					}}
				>
					Contact me here{" "}
					<BsArrowRight className=" opacity-70 group-hover:translate-x-1 transation" />{" "}
				</Link>

				<a
					className="group bg-white text-black px-7 py-3 flex items-center
        gap-2 rounded-full outline-none focus:scale-110 hover:scale-110
        active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="RayaAdindaJayadiAhmad_MSIB_CV.PDF"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
				</a>

				<a
					className=" bg-white p-4 text-gray-700 flex items-center
        gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
        active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://www.linkedin.com/in/raya-adinda/"
					target="_blank"
				>
					<BsLinkedin />
				</a>

				<a
					className=" bg-white p-4 text-gray-700 flex items-center
        gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
        active:scale-105 transition cursor-pointer  borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com/rayaadinda"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	)
}
