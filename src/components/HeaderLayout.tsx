"use client";

import { HeaderItems } from "@/constants/HearderItems";
import { Flex, Layout, Menu, MenuProps } from "antd";
import Link from "next/link";

import React from "react";

const { Header } = Layout;

const items = HeaderItems.map((item, i) => ({
  ...item
}));

export default function HeaderLayout() {


  return (
    <Layout>
      <Header className="flex items-center">
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["0"]}
          className="flex-1 min-w-0"
        >
            {items?.map((item, i) => (
            <Menu.Item key={i}>
              <Link href={item.href}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </Layout>
  );
}
