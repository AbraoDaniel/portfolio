import { Button, Card, Row, Typography } from "antd"
import {  useState } from "react"
import { MdArrowOutward } from "react-icons/md"
import { useNavigate } from "react-router-dom"

interface IProjectCard {
  title: string
  stack: string
  image: string
  link: string
}
const ProjectCard: React.FC<IProjectCard> = ({title, stack, image, link}) => {
  const navigate = useNavigate()
  const [hoveredCard, setHoveredCard] = useState(false)

  return (
    <Card className="project-card" style={{background: `url(${image})`}} onMouseEnter={() => setHoveredCard(true)} onMouseLeave={() => setHoveredCard(false)} onClick={() => navigate(`/projects${link}`)}>
      <Button className={`project-redirect-button ${hoveredCard ? 'hovered' : ''}`}>
        <MdArrowOutward />
      </Button>
      <div className="project-description">
        <Row justify="space-between" style={{width: '100%', display: 'flex', alignItems: 'center'}}>
          <Typography.Text className="project-text">
            {title}
          </Typography.Text>
          <Typography.Text className="project-subtext">
            {stack}
          </Typography.Text>
        </Row>
      </div>
    </Card>
  )
}

export default ProjectCard