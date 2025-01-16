"use client"

import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"

export default function Background() {
	const { theme } = useTheme()
	return (
		<div className="fixed inset-0 -z-50">
			<Waves
				lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.07)"}
				backgroundColor="transparent"
				waveSpeedX={0.015}
				waveSpeedY={0.01}
				waveAmpX={90}
				waveAmpY={20}
				friction={0.99}
				tension={0.01}
				maxCursorMove={100}
				xGap={24}
				yGap={48}
			/>
		</div>
	)
}
