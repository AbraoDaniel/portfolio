import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes'
import { Layout } from "antd";
import PageHeader from "./components/PageHeader";
import MainFooter from "./components/MainFooter";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="page-layout">
        <PageHeader />
        <Content style={{flex: 1 }}>
          <AppRoutes />
        </Content>
        <MainFooter />
      </Layout>
    </Router>
  )
}

export default App
