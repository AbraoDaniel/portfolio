import PresentationSection from "./PresentationSection"
import ProjectsSection from "./ProjectsSection"
import SpecialitiesSection from "./SpecialitiesSection"

const HomePage: React.FC = () => {
  return (
    <>
      <PresentationSection />
      <SpecialitiesSection />
      <ProjectsSection />
    </>
  )
}

export default HomePage