import React from "react";
import { Layout } from "antd";
import { MenuComponent } from "../../components/Menu";
import { childrenOrDefault } from "../../utils";
import { ContainerProps } from "../PagesTypes";
import { HomeProps } from "./Home.types";
import { HomeContent } from "./HomeContent";

const { Header, Content, Footer } = Layout;

const Home: HomeProps = ({ children }) => {
  const childrenHeader = childrenOrDefault(
    children,
    HeaderContainer,
    <MenuComponent />
  );
  const childrenMain = childrenOrDefault(
    children,
    MainContainer,
    <HomeContent />
  );

  return (
    <Layout>
      <Header>{childrenHeader}</Header>
      <Content>{childrenMain}</Content>
      <Footer>
        <p>Footer</p>
      </Footer>
    </Layout>
  );
};

const HeaderContainer: ContainerProps = ({ children }) => <>{children}</>;
const MainContainer: ContainerProps = ({ children }) => <>{children}</>;
const FooterContainer: ContainerProps = ({ children }) => <>{children}</>;

export { Home };
Home.Header = HeaderContainer;
Home.Main = MainContainer;
Home.Footer = FooterContainer;
HeaderContainer.Content = MenuComponent;
MainContainer.Content = HomeContent;
FooterContainer.Content = MenuComponent;
