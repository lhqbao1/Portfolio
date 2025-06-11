import { GridBackgroundDemo } from "@/components/ui/grid-background";
import { GridSection } from "./components/grid-section";
import HeroSection from "./components/hero-section";
import RecentProjects from "./components/recent-projects";
import WorkExperience from "./components/work-experience";
import Approaches from "./components/approaches";
import Contact from "./components/contact";
import ListSocial from "./components/list-social";

export default function Home() {
  return (
    <div className="relative bg-black-100 text-center h-full flex flex-col items-center gap-10 pb-10">
      <GridBackgroundDemo />
      <HeroSection />
      <GridSection />
      <RecentProjects />
      <WorkExperience />
      <Approaches />
      <Contact />
      <ListSocial />
    </div>
  )
}
