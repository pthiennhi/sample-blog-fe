"use client";

import { HeaderItems } from "@/constants/HearderItems";
import { Flex, Layout, Menu, MenuItemProps, MenuProps } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Link from "next/link";

import React from "react";

const { Header } = Layout;

// const items: MenuItemType[] = HeaderItems.map((item, i) => ({
//   ...item,
//   key: i.toString(),
// }));
 

export default function HeaderLayout() {


  return (
    <Layout>
      <Header className="flex items-center">
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          className="flex-1 min-w-0"
          // items={items}
        />
      </Header>
    </Layout>
  );
}
