import { Col, Layout, Menu, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { pageItems } from "../../util/generalFields";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import HeaderDrawer from "./HeaderDrawer";

const { Header } = Layout;

const PageHeader: React.FC = () => {
  const navigate = useNavigate()
  const [ openHeaderDrawer, setOpenHeaderDrawer ] = useState(false)
  function handleClickToRedirect(value: string) {
    if (value !== 'github') {
      return navigate(value)
    }

    window.open('https://github.com/AbraoDaniel', '_blank')
  }

  return (
    <>
      {openHeaderDrawer && <HeaderDrawer  setOpenHeaderDrawer={setOpenHeaderDrawer} items={pageItems}/>}
      <Header className="reduced-main-header">
        <Row className="header-content">
          <Col xs={20} className="daniel-name" >
            <MenuOutlined className="menu-icon"onClick={() => setOpenHeaderDrawer(true)}/>
            <Typography.Text className="name" onClick={() => handleClickToRedirect('/')}>
              {'daniel.'}
            </Typography.Text>
          </Col>
        </Row>
      </Header>
      <Header className="main-header">
        <Row className="header-content">
          <Col xs={3} className="daniel-name" onClick={() => handleClickToRedirect('/')}>
            <Typography.Text className="name">
              {'daniel.'}
            </Typography.Text>
          </Col>
          <Col xs={19}>
            <Menu
              className='header-menu'
              mode="horizontal"
              selectedKeys={[]}
              onClick={(value) => {
                handleClickToRedirect(value?.key)
              }}
              items={pageItems}
            />
          </Col>
        </Row>
      </Header>
    </>
  )
}

export default PageHeader