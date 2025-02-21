import { useEffect } from "react"
import PresentationSection from "./PresentationSection"
import ProjectsSection from "./ProjectsSection"
import SpecialitiesSection from "./SpecialitiesSection"

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  
  return (
    <>
      <PresentationSection />
      <SpecialitiesSection />
      <ProjectsSection />
    </>
  )
}

export default HomePage