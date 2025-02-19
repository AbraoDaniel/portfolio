import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes'
import { Layout } from "antd";
import PageHeader from "./components/PageHeader";

const { Footer, Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="page-layout">
        <PageHeader />
        <Content style={{flex: 1 }}>
          <AppRoutes />
        </Content>
        <Footer className="page-footer" >
          Danti ©{new Date().getFullYear()} Created by Daniel A. Abrão
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
