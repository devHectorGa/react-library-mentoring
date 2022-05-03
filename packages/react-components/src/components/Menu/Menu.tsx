import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MainRoutes } from "../../routes";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

export const MenuComponent: FC = () => (
  <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
    <Menu.Item key="mail" icon={<MailOutlined />}>
      <Link to={MainRoutes.HOME}>Home</Link>
    </Menu.Item>
    <Menu.Item key="two" icon={<AppstoreOutlined />}>
      <Link to={MainRoutes.ABOUT}>About</Link>
    </Menu.Item>
  </Menu>
);
