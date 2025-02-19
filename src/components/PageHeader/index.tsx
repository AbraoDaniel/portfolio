import { Col, Layout, Menu, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { pageItems } from "../../util/generalFields";

const { Header } = Layout;

const PageHeader: React.FC = () => {
  const navigate = useNavigate()
  function handleClickToRedirect(value: string) {
    if (value !== 'github') {
      return navigate(value)
    }

    window.open('https://github.com/AbraoDaniel', '_blank')
  }

  return (
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
  )
}

export default PageHeader