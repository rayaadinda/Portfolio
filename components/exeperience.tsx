"use client"

import React, { memo, useMemo } from "react"
import SectionHeading from "./section-heading"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { experiencesData } from "@/lib/data"
import { useSectionInView } from "@/lib/hooks"
import { useTheme } from "@/context/theme-context"

const TimelineElement = memo(({ item, theme }: { item: any; theme: string }) => (
  <VerticalTimelineElement
    visible={true}
    contentStyle={{
      background:
        theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
      boxShadow: "none",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      textAlign: "left",
      padding: "1rem 2rem",
    }}
    contentArrowStyle={{
      borderRight:
        theme === "light"
          ? "0.4rem solid #9ca3af"
          : "0.4rem solid rgba(255, 255, 255, 0.5)",
    }}
    date={item.date}
    icon={item.icon}
    iconStyle={{
      background:
        theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
      fontSize: "1.5rem",
    }}
  >
    <h3 className="font-semibold capitalize">{item.title}</h3>
    <p className="font-normal !mt-0">{item.location}</p>
    <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
      {item.description}
    </p>
  </VerticalTimelineElement>
));

const Experience = () => {
  const { ref } = useSectionInView("Experience")
  const { theme } = useTheme()

  const timelineElements = useMemo(() => 
    experiencesData.map((item, index) => (
      <React.Fragment key={index}>
        <TimelineElement item={item} theme={theme} />
      </React.Fragment>
    )), [theme]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Education</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {timelineElements}
      </VerticalTimeline>
    </section>
  )
}

export default memo(Experience);
