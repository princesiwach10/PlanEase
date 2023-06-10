import { connect } from "react-redux";
import { TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { Button, Col, Layout, Row, Typography } from "antd";
import { toggleThemeMode } from "../../../store/action/misc";

const { Header } = Layout;

const UnauthHeader = props => {
  const { isDarkMode, toggleThemeMode } = props;

  return (
    <Header className={isDarkMode ? "header-dark" : "header-light"}>
      <Row align="middle">
        <Col flex="auto">
          <Typography.Title className="logo-text" level={3}>
            PlanEase
          </Typography.Title>
        </Col>
        <Col
          className="hc-vm header-height"
          xs={{ span: "auto" }}
          xl={{ span: 1 }}
        >
          <Button
            className="btn-icon"
            icon={isDarkMode ? <TbSunFilled /> : <TbMoonFilled />}
            title={
              isDarkMode ? "Swtich to light theme" : "Swtich to dark theme"
            }
            size="large"
            onClick={() => toggleThemeMode()}
          />
        </Col>
      </Row>
    </Header>
  );
};

const mapStateToProps = state => {
  return {
    isDarkMode: state.misc.isDarkMode,
  };
};

export default connect(mapStateToProps, { toggleThemeMode })(UnauthHeader);
