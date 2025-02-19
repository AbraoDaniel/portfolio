import { Col, Layout, Row, Typography } from "antd";
import { mediaContacts, pageItems, usefullLinks } from "../../util/generalFields";
import { Link } from "react-router-dom";

const { Footer } = Layout;
const MainFooter: React.FC = () => {
  return (
    <Footer className="page-footer" >
      <Row gutter={[16,16]} style={{width: '100%'}}>
        <Col xs={6} className="daniel-name">
          <Row style={{width: '100%'}}>
            <Typography.Text className="name">
              {'daniel.'}
            </Typography.Text>
          </Row>
          {mediaContacts?.map((media) => {
            return (
              <Row style={{width: '100%', display: 'flex', alignItems: 'center'}} className={"first-column-footer"}>
                <div className="footer-icon">
                  <div >
                    {media?.icon}
                  </div>
                </div>
                <Typography.Text className="media-name">
                  {media?.label}
                </Typography.Text>
              </Row>
            )
          })}
        </Col>
        <Col xs={6} className="footer-pages-title">
          <Row style={{width: '100%'}}>
            <Typography.Text className="name">
              {'Páginas'}
            </Typography.Text>
            {pageItems?.map((page) => {
              return (
                <Row style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Typography.Text className="media-name">
                    {page?.label}
                  </Typography.Text>
                </Row>
              )
            })}
          </Row>
        </Col>
        <Col xs={6} className="footer-pages-title">
          <Row style={{width: '100%'}}>
            <Typography.Text className="name">
              {'Links úteis'}
            </Typography.Text>
            {usefullLinks?.map((link) => {
              return (
                <Row style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Link to={link?.key} target="_blank" className="media-name">
                    {link?.label}
                  </Link>
                </Row>
              )
            })}
          </Row>
        </Col>
        <Col xs={6} className="footer-pages-title">
          <Row style={{width: '100%'}} justify="start">
            <Typography.Text className="name">
              {'Créditos'}
            </Typography.Text>
            <Row style={{width: '100%', display: 'flex', alignItems: 'center'}}>
              <Typography.Text style={{cursor: 'default'}} className="media-name">
                {`Danti ©${new Date().getFullYear()}`}
                <br/>
                {'Created by Daniel A. Abrão'}
              </Typography.Text>
            </Row>
          </Row>
        </Col>
      </Row>
      {/* Danti ©{new Date().getFullYear()} Created by Daniel A. Abrão */}
    </Footer>
  )
}

export default MainFooter