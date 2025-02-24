import { Button, Col, Form, Input, Row, Typography, message } from "antd"
import { useState } from "react"
import { MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import EmailSendedMessage from "../../../components/EmailSendedMessage";
import { MinusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ContactForm: React.FC = () => {
  const [contactForm] = Form.useForm()
  const [hoveredSend, setHoveredSend] = useState(false)
  const [loading, setLoading] = useState(false)
  const [visibleSuccessMessage, setVisibleSuccessMessage] = useState(false)

  async function handleSubmit() {
    const validated = await contactForm?.validateFields()
    if (validated) {
      setLoading(true);
      const templateParams = {
        from_name: validated?.name,
        from_email: validated?.email,
        to_name: 'Daniel',
        message: validated?.message,
      };
      emailjs.send(
        "service_mz3vdtv",
        "template_kjt16n5",
        templateParams,
        "SdbhEl_BIqwAwWq0-"
      )
      .then(() => {
        setVisibleSuccessMessage(true);
        contactForm.resetFields();
      })
      .catch(() => {
        message.error("Erro ao enviar a mensagem. Tente novamente.");
      })
      .finally(() => {
        setLoading(false);
      });
    }
  };

  return (
    <>
      {visibleSuccessMessage && <EmailSendedMessage setIsVisible={setVisibleSuccessMessage}/>}
      <div className={`loading-send ${loading ? '' : 'hidden'}`}>
        <MinusOutlined className="line-1"/>
        <MinusOutlined className="line-2"/>
        <MinusOutlined className="line-3"/>
        <MdSend className={`send-icon ${hoveredSend ? 'hovered' : ''}`} />
        <Typography.Text className="sending-email">
          {'Enviando...'}
        </Typography.Text>
      </div>
      <div className={`contact-form ${loading ? 'loading' : ''}`}>
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
        <Form form={contactForm} layout="vertical" requiredMark={false} disabled={loading}>
          <Row>
            <Col xs={24}>
              <Form.Item label="" name="name" rules={[{required: true, message: 'Por favor, informe o nome'}]}>
                <Input placeholder="Nome" className="input-form"/>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="" name="email" rules={[{required: true, type: 'email', message: 'Por favor, informe um e-mail válido'}]}>
                <Input placeholder="E-mail" type="email" className="input-form"/>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item label="" name="message" rules={[{required: true, message: 'Por favor, informe a mensagem'}]}>
                <TextArea placeholder="Enviar mensagem" showCount maxLength={1500} rows={4} className="textarea-form"/>
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Button disabled={loading} className="send-button" onClick={handleSubmit} onMouseEnter={() => setHoveredSend(true)} onMouseLeave={() => setHoveredSend(false)}>
                <Typography.Text className="send-text">
                  {'Enviar mensagem'}
                </Typography.Text>
                <MdSend className={`send-icon ${hoveredSend ? 'hovered' : ''}`} />
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  )
}

export default ContactForm