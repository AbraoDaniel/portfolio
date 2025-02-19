import { Row, Col, Form, Input, Typography, Button } from "antd"
import { useState } from "react";
import { MdSend } from "react-icons/md";

const { TextArea } = Input;

const ContactPage: React.FC = () => {
  const [contactForm] = Form.useForm()
  const [hoveredSend, setHoveredSend] = useState(false)

  return (
    <Row style={{width: '100%'}} className="contact-wrapper">
      <Col xs={8}>
        <div className="contact-image">
        </div>
      </Col>
      <Col xs={13}>
        <div className="contact-form">
          <Row style={{width: '100%'}}>
            <Typography.Text className="contact-form-title">
              CONTATO 
            </Typography.Text>
          </Row>
          <Row style={{width: '100%'}}>
            <Typography.Text className="contact-form-subtitle">
              VAMOS MARCAR UMA CONVERSA 
            </Typography.Text>
          </Row>
          <Form form={contactForm} layout="vertical" requiredMark={false}>
            <Row>
              <Col xs={24}>
                <Form.Item label="" name="name" rules={[{required: true, message: 'Por favor, informe o nome'}]}>
                  <Input placeholder="Nome" className="input-form"/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="" name="email" rules={[{required: true, message: 'Por favor, informe o nome'}]}>
                  <Input placeholder="E-mail" type="email" className="input-form"/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Form.Item label="" name="message" rules={[{required: true, message: 'Por favor, informe a mensagem'}]}>
                  <TextArea showCount maxLength={1500} rows={4} className="textarea-form"/>
                </Form.Item>
              </Col>
              <Col xs={24}>
                <Button className="send-button" onMouseEnter={() => setHoveredSend(true)} onMouseLeave={() => setHoveredSend(false)}>
                  <Typography.Text className="send-text">
                    {'Enviar mensagem'}
                  </Typography.Text>
                  <MdSend className={`send-icon ${hoveredSend ? 'hovered' : ''}`} />
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default ContactPage