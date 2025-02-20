import { Card, Col, Row, Typography } from "antd"
import { pagesInfo } from "../../util/generalFields"

const DantiGoalsPage: React.FC = () => {
  const currentPage = pagesInfo?.filter((page) => page?.key === 'danti-goals')[0]

  return (
    <section className={`show-product-page`}>
      <Row  style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="center">
        <Typography.Text className="projects-title">
          {'Danti Goals'}
        </Typography.Text>
        <Typography.Text className="projects-subtitle" >
          {'Uma ferramenta que facilita o gerenciamento de metas semanais, permitindo aos usuários criar tarefas, acompanhar o progresso de sua conclusão e gerenciar com eficiência pendências.'}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%' }} justify="center" gutter={[16,16]}>
        {currentPage?.firstInfo?.map((info) => {
          return (
            <Col xs={5} >
              <div className="project-title-card">
                <Row style={{width: '100%' }} justify="center">
                  <Typography.Text className="card-title">
                    {info?.title}
                  </Typography.Text>
                </Row>
                <Row style={{width: '100%' }} justify="center">
                  <Typography.Text className="card-description">
                    {info?.text}
                  </Typography.Text>
                </Row>
              </div>
            </Col>
          )
        })}
      </Row>
      <Row justify="center" style={{marginTop: 80}} >
        <div className="show-project" style={{background: `url(/Projects/danti-goals.png)`, height: 630}}>
        </div>
      </Row>
      <Row justify="center" style={{marginTop: 80}} >
        <div className="project-details">
          <Row gutter={[16,16]}>
            <Col xs={13} style={{display: 'flex', alignItems: 'center'}}>
              <div className="project-descrip">
                <Row>
                  <Typography.Text className="title">
                    {"Danti Goals"}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="description">
                    {"A ferramenta ideal para organizar, acompanhar e conquistar seus objetivos de forma eficiente e intuitiva."}
                  </Typography.Text>
                </Row>
              </div>
            </Col>
            <Col xs={11}>
              {currentPage?.cardsInfo?.map((info) => {
                return (
                  <Card className="details-card">
                    <Row>
                      <Typography.Text className="card-title">
                        {info?.title}
                      </Typography.Text>
                    </Row>
                    <Row>
                      <Typography.Text className="card-description">
                        {info?.description}
                      </Typography.Text>
                    </Row>
                  </Card>
                )
              })}
            </Col>
          </Row>
        </div>
      </Row>
    </section>
  )
}

export default DantiGoalsPage