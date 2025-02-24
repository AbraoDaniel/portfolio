import { Row, Typography, Image, Col, Divider } from "antd"
import { useEffect } from "react"
import { worksInfo } from "../../util/generalFields"

const WorkPage: React.FC = () => {
  const firstCardInfos = worksInfo?.filter((info) => info.key === 'first')[0]?.infos
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])
  
  return (
    <Row style={{width: '100%'}} className="work-wrapper">
      <Row style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="space-between">
        <Typography.Text className="work-title">
          {'Desenvolvimento Web'}
        </Typography.Text>
        <Typography.Text className="work-subtitle">
          {'& Prototipação'}
        </Typography.Text>
        <Typography.Text className="work-description">
          {'Do conceito ao código: experiência, inovação e performance em cada projeto.'}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%', marginBottom: '100px'}} justify="center">
        <div className="work-presentation" id='aboutme'>
          <Row>
            <Typography.Text className="title">
              {'CONCEITUALIZAÇÃO'}
            </Typography.Text>
          </Row>
          <Row>
            <Typography.Text className="subtitle">
              {'Transformando Visões em Conceitos Estruturados'}
            </Typography.Text>
          </Row>
          <Row>
            <Image preview={false} src="./danti-laptop.png" className="laptop-image"/>
          </Row>
          <Row style={{width: '100%'}}>
            {firstCardInfos?.map((info, index) => {
              return (
                <>
                  <Col xs={10} lg={5}>
                    <Typography.Text className="work-first-col">
                      {info?.title}
                    </Typography.Text>
                  </Col>
                  <Col xs={14} lg={19}>
                    <Typography.Text className="work-second-col">
                      {info?.description}
                    </Typography.Text>
                  </Col>
                  {index < firstCardInfos?.length - 1 && <Divider className="default-divider"/>}
                </>
              )
            })}
          </Row>
        </div>
      </Row>
    </Row>
  )
}

export default WorkPage