import { Row, Col } from "antd"
import ContactForm from "./ContactForm";
import ContactMedia from "./ContactMedia";
import { mediaContacts } from "../../util/generalFields";
import { useEffect } from "react";
import { usePage } from "../../hooks/usePage";

const ContactPage: React.FC = () => {
  const { isLightMode } = usePage()
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  
  return (
    <Row style={{width: '100%'}} className="contact-wrapper">
      <Col xs={24} lg={8}>
        <div className="contact-image" style={{background: isLightMode ? "url('public/danti-bg-black.png')" : "url('public/daniel-bg.png')"}}>
        </div>
      </Col>
      <Col xs={24} lg={13}>
        <ContactForm />
        <Row gutter={[16,16]} style={{width: '100%', marginRight: 0, marginLeft: 0}} className="contact-cards">
          {mediaContacts?.map((media) => {
            return (
              <Col xs={24} lg={8}>
                <ContactMedia label={media?.label} icon={media?.icon} link={media?.link} />
              </Col>
            )
          })}
        </Row>
      </Col>
    </Row>
  )
}

export default ContactPage