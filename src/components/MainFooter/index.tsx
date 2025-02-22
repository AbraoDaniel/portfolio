import { Col, Layout, Row, Switch, Typography } from "antd";
import { mediaContacts, pageItems, usefullLinks } from "../../util/generalFields";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePage } from "../../hooks/usePage";

const { Footer } = Layout;
const MainFooter: React.FC = () => {
  const navigate = useNavigate()
  const { isLightMode, setIsLightMode } = usePage()

  useEffect(() => {
    setIsLightMode(document.documentElement.classList.contains("light-mode"));
  }, []);

  function handleClickToRedirect(value: string) {
    if (value !== 'github') {
      return navigate(value)
    }

    window.open('https://github.com/AbraoDaniel', '_blank')
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("light-mode");
    setIsLightMode((prev: boolean) => !prev);
  };
  
  return (
    <Footer className="page-footer" >
      <Row gutter={[16,16]} style={{width: '100%'}}>
        <Col xs={12} lg={6} className="daniel-name">
          <Row style={{width: '100%'}}>
            <Typography.Text className="name" onClick={() => navigate('/')}>
              {'daniel.'}
            </Typography.Text>
          </Row>
          {mediaContacts?.map((media) => {
            return (
              <Row style={{width: '100%', display: 'flex', alignItems: 'center'}} className={"first-column-footer"}>
                <div className="footer-icon" onClick={() => window.open(media?.link, '_blank')}>
                  <div >
                    {media?.icon}
                  </div>
                </div>
                <Typography.Text className="media-name" onClick={() => window.open(media?.link, '_blank')}>
                  {media?.label}
                </Typography.Text>
              </Row>
            )
          })}
        </Col>
        <Col xs={12} lg={6} className="footer-pages-title">
          <Row style={{width: '100%'}}>
            <Typography.Text className="name">
              {'Páginas'}
            </Typography.Text>
            {pageItems?.map((page) => {
              return (
                <Row style={{width: '100%', display: 'flex', alignItems: 'center'}}>
                  <Typography.Text className="media-name" onClick={() => handleClickToRedirect(page?.key)}>
                    {page?.label}
                  </Typography.Text>
                </Row>
              )
            })}
          </Row>
        </Col>
        <Col xs={12} lg={6} className="footer-pages-title">
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
        <Col xs={12} lg={6} className="footer-pages-title">
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
            <Row justify="center" style={{ marginTop: "20px" }}>
              <Switch 
                className="theme-switch"
                checked={isLightMode}
                onChange={toggleDarkMode} 
                checkedChildren="☀️"
                unCheckedChildren="🌙"
              />
            </Row>
          </Row>
        </Col>
      </Row>
    </Footer>
  )
}

export default MainFooter