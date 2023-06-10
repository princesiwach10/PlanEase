import Main from "./components/pages";
import { connect } from "react-redux";
import { ConfigProvider, Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import { darkTheme, lightTheme } from "./utils/constant";
import "antd/dist/reset.css";
import "./assest/css/app.css";

const { Content } = Layout;

function App(props) {
  const { isDarkMode } = props;

  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Layout>
        <Content className="layout-content">
          <BrowserRouter>
            <Main />
          </BrowserRouter>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

const mapStateToProps = state => {
  return {
    isDarkMode: state.misc.isDarkMode,
  };
};

export default connect(mapStateToProps, {})(App);
