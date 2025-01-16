"use client"

import { projectsData } from "@/lib/data"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Waves } from "./ui/waves-background"
import { StaticImageData } from "next/image"
import { Tilt } from "@/components/ui/tilt"

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
  const { theme } = useTheme()
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
      className="group relative mb-3 last:mb-0"
    >
      <Tilt rotationFactor={8} isReverse>
        <div className="relative overflow-hidden rounded-lg border border-zinc-200 bg-white transition duration-300 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
          <div className="absolute inset-0">
            <Waves
              lineColor={theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"}
              backgroundColor="transparent"
              waveSpeedX={0.02}
              waveSpeedY={0.01}
              waveAmpX={40}
              waveAmpY={20}
              friction={0.9}
              tension={0.01}
              maxCursorMove={120}
              xGap={12}
              yGap={36}
            />
          </div>
          <div className="relative z-10 flex flex-col gap-4 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-800">
                  <Image
                    src={imageUrl}
                    alt={title}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  )
}
