import React from "react";

import { Avatar, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const AvatarDropdown = () => {
  const userMenu = (
    <Menu>
      <Menu.Item key="1">Profile</Menu.Item>
      <Menu.Item key="2">My Courses</Menu.Item>
      <Menu.Item key="3">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
    </Menu>
  );
  return (
    <div>
      <Dropdown overlay={userMenu} placement="bottomRight">
        <Avatar
          size={64}
          icon={<UserOutlined />}
          style={{ cursor: "pointer" }}
        />
      </Dropdown>
    </div>
  );
};

export default AvatarDropdown;
