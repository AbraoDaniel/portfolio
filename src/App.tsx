import { BrowserRouter as Router} from "react-router-dom";
import AppRoutes from './AppRoutes'
import { Layout } from "antd";
import PageHeader from "./components/PageHeader";
import MainFooter from "./components/MainFooter";
import { PageProvider } from "./contexts/PageContext.tsx";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router basename="/portfolio/">
      <PageProvider>
        <Layout className="page-layout">
          <PageHeader />
          <Content style={{flex: 1 }}>
            <AppRoutes />
          </Content>
          <MainFooter />
        </Layout>
      </PageProvider>
    </Router>
  )
}

export default App
