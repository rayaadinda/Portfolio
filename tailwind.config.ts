import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			animation: {
				'wave-pulse': 'wave-pulse 4s ease-in-out infinite',
			},
			keyframes: {
				'wave-pulse': {
					'0%, 100%': { opacity: '0.4' },
					'50%': { opacity: '0.7' },
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
}
export default config
