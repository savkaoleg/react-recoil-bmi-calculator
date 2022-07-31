import React, { ReactNode, FC } from "react";

import { Layout, Typography } from "antd";
import ThemeSwitcher from "./ThemeSwitcher";
const { Text } = Typography;
const { Header, Footer, Content } = Layout;
type Props = {
  children?: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Text className='ant-typography-white'>{"BMI calculator"}</Text>
        <div
          style={{
            display: "inline-block",
            float: "right",
          }}
        >
          <ThemeSwitcher />
        </div>
      </Header>
      <Content className='layout-bg'>{children}</Content>
      <Footer>
        Author:{" "}
        <a href='https://github.com/savkaoleg' target='_blank' rel='noreferrer'>
          {"Savka Oleg"}
        </a>
      </Footer>
    </Layout>
  );
}
