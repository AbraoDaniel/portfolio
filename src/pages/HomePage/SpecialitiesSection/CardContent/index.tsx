import { Button, Card, Row, Typography } from "antd"
import { useState } from "react"
import { MdArrowOutward } from "react-icons/md"
import { useNavigate } from "react-router-dom"

interface ICardContent {
  number: string
  title: string
  text: string
  link: string
}
const CardContent: React.FC<ICardContent> = ({number, title, text, link}) => {
  const navigate = useNavigate()
  console.log(link)
  const [hovered, setHovered] = useState(false)
  
  return (
    <Card className="specialities-card">
      <Row style={{width: '100%'}}>
        <Typography.Text className="card-number">
          {number}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%'}}>
        <Typography.Text className="card-title">
          {title}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%'}}>
        <Typography.Text className="card-text">
          {text}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%', display: 'flex', alignItems: 'center', marginTop: 10}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <Button className={`project-redirect-all-button ${hovered ? 'hovered' : ''}`}>
          <MdArrowOutward />
        </Button>
        <Typography.Text className="card-redirect" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => navigate('/work')}>
          VER SOBRE
        </Typography.Text>
      </Row>
    </Card>
  )
}

export default CardContent