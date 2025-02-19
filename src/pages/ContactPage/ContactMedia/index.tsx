import { Col, Row, Typography } from "antd"
import { MdArrowOutward } from "react-icons/md"
import { JSX, useState } from "react"

interface IContactMedia {
  label: string
  icon: JSX.Element
  link: string
}
const ContactMedia: React.FC<IContactMedia> = ({label, icon, link}) => {
  const [hoveredCard, setHoveredCard] = useState(false)

  return (
    <a href={link} target="_blank">
      <Col xs={24} className="contact-card" onMouseEnter={() =>  setHoveredCard(true)} onMouseLeave={() =>  setHoveredCard(false)}> 
        <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="info">
            {icon}
            <Typography.Text className="media-name">
              {label}
            </Typography.Text>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <MdArrowOutward className={`media-arrow ${hoveredCard ? 'hovered' : ''}`}/>
          </div>
        </Row>
      </Col>
    </a>
  )
}

export default ContactMedia