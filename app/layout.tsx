import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import Header from "@/components/header"
import ActiveSectionContextProvider from "@/context/active-section-context"
import Footer from "@/components/footer"
import { Toaster } from "react-hot-toast"
import ThemeSwitch from "@/components/theme-switch"
import ThemeContextProvider from "@/context/theme-context"
import Background from "@/components/background"

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "700"],
})

export const metadata: Metadata = {
	title: "Raya Portfolio",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className}
       text-gray-950 relative pt-40 sm:pt-48 bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Background />
						<Header />
						{children}
						<Footer />
						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
				<SpeedInsights />
			</body>
		</html>
	)
}
