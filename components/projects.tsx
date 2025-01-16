"use client";

import React, { useCallback, useMemo } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { SocialCard } from "@/components/ui/social-card";
import { Link as LinkIcon } from "lucide-react";
import { projectsData } from "@/lib/data";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  const handleAction = useCallback((id: number, action: string) => {
    console.log(`Project ${id}: ${action}`);
  }, []);

  const memoizedProjectCards = useMemo(() => 
    projectsData.map((project, index) => (
      <SocialCard
        key={index}
        author={{
          name: "Raya Adinda",
          username: "rayaadinda",
          avatar: "https://github.com/rayaadinda.png",
          timeAgo: "Recently",
        }}
        content={{
          text: project.title,
          link: {
            title: project.description,
            description: project.tags.join(" • "),
            icon: <LinkIcon className="w-5 h-5 text-blue-500" />,
          },
        }}
        engagement={{
          likes: Math.floor(Math.random() * 100) + 50,
          comments: Math.floor(Math.random() * 30) + 10,
          shares: Math.floor(Math.random() * 20) + 5,
          isLiked: false,
          isBookmarked: false,
        }}
        onLike={() => handleAction(index, 'liked')}
        onComment={() => handleAction(index, 'commented')}
        onShare={() => window.open(project.url, '_blank')}
        onBookmark={() => handleAction(index, 'bookmarked')}
        onMore={() => handleAction(index, 'more')}
        className="h-full"
      />
    )), [handleAction]);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        {memoizedProjectCards}
      </div>
    </section>
  );
}
