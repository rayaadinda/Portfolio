"use client"

import { useTheme } from "next-themes"
import { Waves } from "@/components/ui/waves-background"

export default function Background() {
	const { theme } = useTheme()
	return (
		<div className="fixed inset-0 -z-50">
			<Waves
				lineColor={
					theme === "dark" ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.07)"
				}
				backgroundColor="rgba(255, 255, 255, 0.2)"
				waveSpeedX={0.02}
				waveSpeedY={0.01}
				waveAmpX={40}
				waveAmpY={20}
				friction={0.9}
				tension={0.01}
				maxCursorMove={0}
				xGap={12}
				yGap={36}
			/>
		</div>
	)
}
