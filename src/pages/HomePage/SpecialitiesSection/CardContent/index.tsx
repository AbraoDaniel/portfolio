import { Card, Row, Typography } from "antd"

interface ICardContent {
  number: string
  title: string
  text: string
  link: string
}
const CardContent: React.FC<ICardContent> = ({number, title, text, link}) => {
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
      <Row style={{width: '100%'}}>
        <Typography.Text className="card-redirect" onClick={() => alert(link)}>
          VER SOBRE
        </Typography.Text>
      </Row>
    </Card>
  )
}

export default CardContent