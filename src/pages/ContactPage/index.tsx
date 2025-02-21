import { Row, Col } from "antd"
import ContactForm from "./ContactForm";
import ContactMedia from "./ContactMedia";
import { mediaContacts } from "../../util/generalFields";
import { useEffect } from "react";

const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  
  return (
    <Row style={{width: '100%'}} className="contact-wrapper">
      <Col xs={8}>
        <div className="contact-image">
        </div>
      </Col>
      <Col xs={13}>
        <ContactForm />
        <Row gutter={[16,16]} style={{width: '100%', marginRight: 0, marginLeft: 0}} className="contact-cards">
          {mediaContacts?.map((media) => {
            return (
              <Col xs={8}>
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