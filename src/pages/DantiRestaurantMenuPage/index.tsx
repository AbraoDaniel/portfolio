import { Button, Card, Col, Row, Typography } from "antd"
import { pagesInfo } from "../../util/generalFields"
import { useEffect, useState } from "react"
import { MdArrowOutward } from "react-icons/md"

const DantiRestaurantMenuPage: React.FC = () => {
  const currentPage = pagesInfo?.filter((page) => page?.key === 'danti-restaurant-menu')[0]
  const [hovered, setHovered] = useState(false)
  
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [])

  function handleClickSeeRepository() {
    window.open('https://github.com/AbraoDaniel/restaurant_menu', '_blank')
  }

  return (
    <section className="show-product-page">
      <Row  style={{width: '100%', display: 'flex', alignItems: 'center'}} justify="center">
        <Typography.Text className="projects-title">
          {'Danti Menu'}
        </Typography.Text>
        <Typography.Text className="projects-subtitle" >
          {'Transforme a experiência gastronômica do seu restaurante com um menu digital moderno, intuitivo e acessível para seus clientes.'}
        </Typography.Text>
      </Row>
      <Row style={{width: '100%' }} justify="center" gutter={[16,16]}>
        {currentPage?.firstInfo?.map((info, index) => {
          return (
            <Col key={`${info?.title}_${index}`} xs={24} lg={5} >
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
        <div className="show-project" style={{background: `url('/Projects/danti-menu.png`}}>
        </div>
      </Row>
      <Row justify="center" style={{marginTop: 80}} >
        <div className="project-details">
          <Row gutter={[16,16]}>
            <Col xs={24} lg={13} style={{display: 'flex', alignItems: 'center'}}>
              <div className="project-descrip">
                <Row>
                  <Typography.Text className="title">
                    {"Danti Restaurant Menu"}
                  </Typography.Text>
                </Row>
                <Row>
                  <Typography.Text className="description">
                    {"Uma solução moderna e eficiente para digitalizar o cardápio de restaurantes, proporcionando praticidade e uma experiência intuitiva para os clientes."}
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
            <Col xs={24} lg={11}>
              {currentPage?.cardsInfo?.map((info, index) => {
                return (
                  <Card key={`${info?.title}_${index}`} className="details-card">
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

export default DantiRestaurantMenuPage