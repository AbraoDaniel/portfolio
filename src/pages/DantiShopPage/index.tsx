import { Card, Col, Row, Typography } from "antd"
import { pagesInfo } from "../../util/generalFields"

const DantiShopPage: React.FC = () => {
  const currentPage = pagesInfo?.filter((page) => page?.key === 'danti-shop')[0]

  return (
    <section className={`show-product-page`}>
      <Row  style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="center">
        <Typography.Text className="projects-title">
          {'Danti Shop'}
        </Typography.Text>
        <Typography.Text className="projects-subtitle" >
          {'Uma plataforma de e-commerce com interface moderna e responsiva, desenvolvida com uma arquitetura escalável visando entregar a maior qualidade para o usuário.'}
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
        <div className="show-project" style={{background: `url(/Projects/danti-shop_.png)`}}>
        </div>
      </Row>
      <Row justify="center" style={{marginTop: 80}} >
        <div className="project-details">
          <Row gutter={[16,16]}>
            <Col xs={13} style={{display: 'flex', alignItems: 'center'}}>
              <div className="project-descrip">
                <Row>
                  <Typography.Text className="title">
                    {"Danti Shop"}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="description">
                    {"Uma experiência de compra fluida, moderna e intuitiva, feita para você."}
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

export default DantiShopPage