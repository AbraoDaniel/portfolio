import { Button, Col, Row, Typography } from "antd"
import { projects } from "../../../util/generalFields"
import { MdArrowOutward } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import ProjectCard from "../../../components/ProjectCard"

const ProjectsSection: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting); // Atualiza o estado quando a seção entra na tela
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={`projects-section ${visible ? 'visible' : ''}`} ref={sectionRef}>
      <Row style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="space-between">
        <Typography.Text className="projects-title">
          {'Projetos Realizados'}
        </Typography.Text>
        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
          <Button className={`project-redirect-all-button ${hovered ? 'hovered' : ''}`}>
            <MdArrowOutward />
          </Button>
          <Typography.Text className="redirect-all-text">
            {'VER TODOS'}
          </Typography.Text>
        </div>
      </Row>
      <Row gutter={[16,16]} style={{width: '100%'}}>
        {projects?.map((project) => {
          return (
            <Col xs={24} lg={12} xxl={8}> 
              <ProjectCard title={project?.title} stack={project?.stack} image={project?.image} link={project?.link}/>
            </Col>
          )
        })}
      </Row> 
    </section>
  )
}

export default ProjectsSection