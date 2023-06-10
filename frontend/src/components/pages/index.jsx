import UnauthHeader from "../templates/header/unauthHeader";
import { Col, Layout, Typography } from "antd";

const { Content } = Layout;

const Index = props => {
  return (
    <Layout>
      <UnauthHeader />
      <Content>
        <Col className="hc-vm" span={16}>
          <Typography.Title>
            Simplify Schedule, Maximize Productivity.
          </Typography.Title>
        </Col>
      </Content>
    </Layout>
  );
};

export default Index;
