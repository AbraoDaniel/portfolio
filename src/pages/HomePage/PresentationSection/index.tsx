import { Row, Col, Typography  } from "antd"
import InfiniteSlider from "../../../components/InfiniteSlider"
import { usePage } from "../../../hooks/usePage";

const PresentationSection: React.FC = () => {
  const { isLightMode } = usePage()
  
  return (
    <section>
      <Row style={{marginBottom: 40, background: isLightMode ? "url('./danti-bg-black.png')" : "url('./daniel-bg.png')"}} className="presentation-page">
        <Col xs={24} style={{display: 'flex', justifyContent: 'center', alignItems: 'end'}}>
          <Typography.Text className="presentation-text">
            {"Desenvolvedor"}
            <br/>
            {"Frontend"}
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