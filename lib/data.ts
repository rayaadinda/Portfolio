import React from "react"
import fromrayacameraImg from "@/public/fromrayacamera.png"
import rayminImg from "@/public/raymin.png"
import movielistImg from "@/public/movielist.png"
import bookshelfImg from "@/public/bookshelf.png"
import rafconvertImg from "@/public/rafconvert.png"
import bangkit from "@/public/bangkit.jpg"
import monogatari from "@/public/image.png"
import { LuGraduationCap } from "react-icons/lu"

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
] as const

export const projectsData = [
	{
		title: "Fromrayacamera",
		description:
			"Fromrayacamera is a website gallery of my journey while using an analog camera as well as being a final project in one of my courses",
		tags: ["Html", "css", "Javascript", "figma"],
		imageUrl: fromrayacameraImg,
		url: "https://rayaadinda.github.io/fromrayacamera/",
	},
	{
		title: "Raymin",
		description:
			"Raymin is an admin dashboard website that I sliced ​​from Figma",
		tags: ["Html", "css", "Javascript", "figma"],
		imageUrl: rayminImg,
		url: "https://rayaadinda.github.io/Slicing-Admin-Dasboard/",
	},

	{
		title: "Movie-List",
		description:
			"movie list is a my react project that displays a list of movies by consuming api from TheMoviedb",
		tags: ["react", "taildwindCSS", "Javascript"],
		imageUrl: movielistImg,
		url: "https://react-movie-jet.vercel.app/",
	},

	{
		title: "BookshelfAPP",
		description:
			"BookshelfApp is a web app for managing book collections, where users can input book details like title, author, and publication date. It organizes books into read and unread categories, aiding users in tracking their reading progress.",
		tags: ["html", "css", "Javascript"],
		imageUrl: bookshelfImg,
		url: "https://book-shelf-app-zeta.vercel.app/",
	},

	{
		title: "RAFConvert",
		description:
			"RAFConvert is a versatile website designed for hassle-free conversion of links from YouTube, Instagram, and Twitter into downloadable formats. With RAFConvert, users can easily obtain their favorite content from these platforms with just a few clicks",
		tags: ["html", "css", "Javascript"],
		imageUrl: rafconvertImg,
		url: "https://rayaadinda.github.io/RAF/",
	},

	{
		title: "Monogatari",
		description:
			"Monogatari is a MERN stack Blog WebApp that allows users to read, create, and delete blog posts. It's a platform for sharing stories, thoughts, and experiences.",
		tags: ["MongoDB", "Expressjs", "Reactjs", "Tailwindcss", "Nodejs"],
		imageUrl: monogatari,
		url: "https://monogatariv2.vercel.app/",
	},
] as const

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"Kotlin",
	"React",
	"Next.js",
	"Git",
	"Tailwind",
	"Framer Motion",
	"Figma",
	"C++",
	"Java",
	"MySql",
] as const

export const experiencesData = [
	{
		title: "Bangkit Academy",
		location: "Mobile Developer Cohort",
		description:
			"accepted from 45,000 registered and became a mobile developer cohort and fully graduated",
		icon: React.createElement('img', { 
			src: '/bangkit.jpg', 
			alt: 'Bangkit Academy Logo', 
			className: 'w-8 h-8 rounded-full object-cover' 
		}),
		date: "Sep 2024 - Dec 2024",
	},

	{
		title: "Universitas Pamulang",
		location: "Pamulang, Tanggerang Selatan",
		description:
			"I'm now a Computer Science Student at Universitas Pamulang. Currently i'm in 6th Semester.",
		icon: React.createElement(LuGraduationCap),
		date: " 2022 - present",
	},

	{
		title: "SMKN 58 JAKARTA",
		location: "Cipayung, Jakarta Timur",
		description: "I graduated after 3 years of studying in Senior High Scholl",
		icon: React.createElement(LuGraduationCap),
		date: " 2019 - 2021",
	},
] as const
