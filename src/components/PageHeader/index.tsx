import { Col, Layout, Menu, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const PageHeader: React.FC = () => {
  const navigate = useNavigate()
  const items = [
    {key: 'projects', label: 'PROJETOS'},
    {key: 'work', label: 'CARREIRA'},
    {key: 'about', label: 'SOBRE'},
    {key: 'github', label: 'GITHUB'},
    {key: 'contacts', label: 'CONTATOS'},
  ]

  function handleClickToRedirect(value: string) {
    if (value !== 'github') {
      return navigate(value)
    }

    alert('a')
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
            items={items}
          />
        </Col>
      </Row>
    </Header>
  )
}

export default PageHeader