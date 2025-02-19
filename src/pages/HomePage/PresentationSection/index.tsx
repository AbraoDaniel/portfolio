import { Row, Col, Typography  } from "antd"
import InfiniteSlider from "../../../components/InfiniteSlider"

const PresentationSection: React.FC = () => {
  return (
    <section>
      <Row style={{marginBottom: 40}} className="presentation-page">
        <Col xs={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'end', marginTop: 500}}>
          <Typography.Text className="presentation-text">
            {"Desenvolvedor"}
            <br/>
            {"Fullstack"}
          </Typography.Text>
        </Col>
        <Col xs={24} style={{display: 'flex', justifyContent: 'center'}}>
          <Typography.Text className="presentation-subtext">
            {"Desenvolvimento de interfaces intuitivas e performáticas, \nvisando entregar valor e experiências únicas para o usuário"}
          </Typography.Text>
        </Col>
      </Row> 
      <InfiniteSlider />
    </section>
  )
}

export default PresentationSection