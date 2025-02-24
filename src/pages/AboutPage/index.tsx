import { Button, Col, Row, Typography, Image } from "antd"
import { useEffect, useState } from "react"
import { MdArrowOutward } from "react-icons/md"
import { mediaContacts } from "../../util/generalFields"
import ContactMedia from "../ContactPage/ContactMedia"

const AboutPage: React.FC = () => {
  const [hovered, setHovered] = useState(false)
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
 
  
  return (
    <Row style={{width: '100%'}} className="about-wrapper">
      <Col xs={24} xl={8}>
        <div className="about-image">
        </div>
      </Col>
      <Col xs={24} xl={16}>
        <div className="about-content">
          <Row style={{width: '100%'}}>
            <Row style={{width: '100%'}}>
              <Typography.Text className="name">
                {'Daniel Abrão'}
              </Typography.Text>
            </Row>
            <Row style={{width: '100%'}}>
              <Typography.Text className="description">
                {'Desenvolvendo interfaces criativas, intuitivas e performáticas focando na experência do usuário.'}
              </Typography.Text>
            </Row>
            <Row>
              <a href="#aboutme">
                <Typography.Text className="redirect" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                  <Button className={`project-redirect-all-button ${hovered ? 'hovered' : ''}`}>
                    <MdArrowOutward />
                  </Button>
                  {"SOBRE MIM"}
                </Typography.Text>
              </a>
            </Row>
          </Row>
          <Row style={{width: '100%'}}>
            <div className="presentation" id='aboutme'>
              <Row>
                <Typography.Text className="name">
                  {'DANIEL ALEXSANDRO ABRÃO'}
                </Typography.Text>
              </Row>
              <Row>
                <Typography.Text className="sub-text">
                  {'Seu parceiro na criação de interfaces web modernas e intuitivas'}
                </Typography.Text>
              </Row>
              <Row>
                <Typography.Text className="main-text">
                  {"Sou um desenvolvedor frontend com 3 anos de experiência no mercado, apaixonado por criar experiências digitais envolventes e eficientes. Minha especialidade está em desenvolver interfaces modernas, acessíveis e de alta performance, garantindo que cada usuário tenha uma navegação fluida e intuitiva.\n\nTrabalho principalmente com ReactJS e TypeScript, utilizando boas práticas de UI/UX para entregar soluções escaláveis e bem estruturadas. Além disso, tenho experiência no backend com Ruby on Rails e Java, o que me permite compreender toda a estrutura de uma aplicação e garantir uma integração eficiente entre frontend e backend.\n\nMinha abordagem é centrada na qualidade e otimização, sempre buscando melhorar a performance e acessibilidade das aplicações. Estou constantemente atualizado com as novas tendências do mercado, aplicando as melhores tecnologias e metodologias para desenvolver produtos que realmente fazem a diferença.\n\nSeja construindo um novo projeto ou aprimorando uma aplicação existente, meu compromisso é sempre entregar excelência, inovação e impacto real. 🚀"}
                </Typography.Text>
              </Row>
              <Row justify="center">
                <Typography.Text className="personal-photo">
                  <Image preview={false} src="./mypicture.png"/>
                </Typography.Text>
              </Row>
            </div>
          </Row>
          <Row gutter={[16,16]} style={{width: '100%', marginRight: 0, marginLeft: 0}} className="contact-cards">
            {mediaContacts?.map((media) => {
              return (
                <Col xs={24} xl={8}>
                  <ContactMedia label={media?.label} icon={media?.icon} link={media?.link} />
                </Col>
              )
            })}
          </Row>
        </div>
      </Col>
    </Row>
  )
}

export default AboutPage