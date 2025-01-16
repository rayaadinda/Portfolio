"use client"
import React, { useCallback, memo } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useSectionInView } from "@/lib/hooks"
import { useActiveSectionContext } from "@/context/active-section-context"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HyperText } from "@/components/ui/hyper-text"
import { Tilt } from "@/components/ui/tilt"


const SocialLink = memo(({ href, icon: Icon }: { href: string; icon: React.ComponentType<{ size: number }> }) => (
  <Link
    href={href}
    target="_blank"
    className="bg-gray-100 p-2.5 rounded-lg text-gray-700 hover:text-gray-950 transition"
  >
    <Icon size={20} />
  </Link>
))
SocialLink.displayName = 'SocialLink'

const Intro = memo(() => {
  const { ref } = useSectionInView("Home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  const handleContactClick = useCallback(() => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  }, [setActiveSection, setTimeOfLastClick]);

  return (
    <section
      ref={ref}
      id="home"
      className="pt-2 pb-14 flex items-center justify-center"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between w-full px-4 gap-8 sm:gap-24">
        <div className="flex flex-col items-center sm:items-start max-w-xl text-center sm:text-left">
          <motion.div className="flex items-center gap-3 text-base mb-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}>
            <span className=""><HyperText text="Software Engineer" className="text-lg font-medium" animateOnLoad={true} /></span>
          </motion.div>

          <HyperText 
            text="Hi, I'm Raya Adinda"
            className="text-4xl font-bold mb-4"
            animateOnLoad={true}
          />

          <motion.p
            className="text-black text-base sm:text-lg mb-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <HyperText text="Frontend Developer from Jakarta, ID" className="text-lg font-medium" animateOnLoad={true} /> 
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
              onClick={handleContactClick}
            >
              <span>+</span> Hire Me
            </Link>
            <div className="flex gap-2">
              <SocialLink href="https://github.com/rayaadinda" icon={FaGithub} />
              <SocialLink href="https://linkedin.com/in/rayaadinda" icon={FaLinkedin} />
            </div>
          </motion.div>
        </div>

        <motion.div className="relative"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}>
          <Tilt
            rotationFactor={30}
            springOptions={{
              stiffness: 26.7,
              damping: 4.1,
              mass: 0.2,
            }}
            className="group relative"
          >
            <div className="bg-[#E8FBE8] text-emerald-600 text-center font-medium px-3 py-0.5 rounded-full text-[13px]">
              AVAILABLE FOR WORK
            </div>
            <div className="relative h-48 w-48 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
              <Image
                src="/avatar.png"
                alt="Raya Adinda"
                width={200}
                height={200}
                quality={95}
                priority={true}
                className="object-cover"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  )
})
Intro.displayName = 'Intro'

export default Intro;
