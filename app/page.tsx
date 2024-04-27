import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import About from "@/components/about";
import Exeperience from "@/components/exeperience";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects/>
      <Skills />
      <Exeperience />
    </div>
  );
}
