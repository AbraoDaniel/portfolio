import { Button, Card, Col, Row, Typography } from "antd"
import { pagesInfo } from "../../util/generalFields"
import { useEffect, useState } from "react"
import { MdArrowOutward } from "react-icons/md"

const DantiWalletPage: React.FC = () => {
  const currentPage = pagesInfo?.filter((page) => page?.key === 'danti-wallet')[0]
  const [hovered, setHovered] = useState(false)
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])

  function handleClickSeeRepository() {
    window.open('https://github.com/AbraoDaniel/Budget_Rails', '_blank')
  }

  return (
    <section className={`show-product-page`}>
      <Row  style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="center">
        <Typography.Text className="projects-title">
          {'Danti Wallet'}
        </Typography.Text>
        <Typography.Text className="projects-subtitle" >
          {'Controle financeiro simplificado! Uma plataforma eficiente para gerenciar despesas, visualizar transações e manter o equilíbrio das suas finanças.'}
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
        <div className="show-project" style={{background: `url(/Projects/danti-wallet.png)`}}>
        </div>
      </Row>
      <Row justify="center" style={{marginTop: 80}} >
        <div className="project-details">
          <Row gutter={[16,16]}>
            <Col xs={13} style={{display: 'flex', alignItems: 'center'}}>
              <div className="project-descrip">
                <Row>
                  <Typography.Text className="title">
                    {"Danti Wallet"}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="description">
                    {"Controle financeiro eficiente fluido, moderno e intuitivo, feito para você."}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="redirect" onClick={handleClickSeeRepository} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    <Button className={`project-redirect-all-button ${hovered ? 'hovered' : ''}`}>
                      <MdArrowOutward />
                    </Button>
                    {"Acessar repositório"}
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

export default DantiWalletPage