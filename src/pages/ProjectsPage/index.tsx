import { Col, Row, Typography } from "antd"
import { projects } from "../../util/generalFields"
import ProjectCard from "../../components/ProjectCard"

const ProjectsSection: React.FC = () => {
  return (
    <section className={`projects-section-page`} >
      <Row style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="space-between">
        <Typography.Text className="projects-title">
          {'Projetos'}
        </Typography.Text>
        <Typography.Text className="projects-subtitle">
          {'Uma prévia dos últimos projetos pessoais que realizei'}
        </Typography.Text>
      </Row>
      <Row gutter={[16,16]} style={{width: '100%'}}>
        {projects?.map((project) => {
          return (
            <Col xs={12} > 
              <ProjectCard title={project?.title} stack={project?.stack} image={project?.image} link={project?.link}/>
            </Col>
          )
        })}
        
      </Row> 
    </section>
  )
}

export default ProjectsSection