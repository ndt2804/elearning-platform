import React from "react";
import Link from "next/link";
import { Avatar, Dropdown } from "antd";
import { signOut, useSession } from "next-auth/react";
import type { MenuProps } from "antd";
const AvatarDropdown = () => {
  const { data: session }: any = useSession();
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href={`/user/${session.user.name}`}>Profile</Link>,
    },
    {
      key: "2",
      label: <Link href="/courses">My Courses</Link>,
    },
    {
      key: "3",
      label: <Link href="/settings">Settings</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "4",
      label: (
        <a
          onClick={() => {
            signOut();
          }}
        >
          Logout
        </a>
      ),
    },
  ];
  const username = session?.user?.name || "";
  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]} placement="bottomRight">
        <Avatar
          size={48}
          style={{
            backgroundColor: session.user.image ? "transparent" : "#fde3cf",
            color: session.user.image ? "inherit" : "#f56a00",
            cursor: session.user.image ? "auto" : "pointer",
          }}
          src={session.user.image || undefined}
        >
          {session.user.image ? null : firstLetter}
        </Avatar>
      </Dropdown>
    </div>
  );
};
export default AvatarDropdown;
