"use client";

import logo from "@/../public/logo_vietnam_black.png";
import { HeaderItems } from "@/constants/HearderItems";
import { Button, Flex, Input, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Image from "next/image";
import SearchIcon from "./icon/SearchIcon";
import Link from "next/link";

const { Search } = Input;

const items: MenuItemType[] = HeaderItems.map((item, i) => ({
  ...item,
  key: i.toString(),
}));

export default function HeaderLayout() {
  return (
    <Flex
      className="mx-24 my-4 flex-1 min-w-0 rounded-2xl shadow-sm h-16 bg-[#fafafa] px-4"
      justify="space-between"
      align="center"
    >
      <Link href="/">
        <Image alt="logo" src={logo} width={100} priority />
      </Link>
      <Menu
        style={{ backgroundColor: "transparent", border: "none" }}
        mode="horizontal"
        defaultSelectedKeys={["0"]}
        items={items}
        className="flex min-w-[240px] justify-end gap-3"
      />
      <Search
        placeholder="search blog..."
        allowClear
        style={{ width: "360px" }}
        bordered={false}
        className="rounded-xl bg-[#f5f5f5] text-[#606060]"
        enterButton={
          <Button
            type="link"
            style={{ borderRadius: "12px" }}
            icon={<SearchIcon />}
          />
        }
      />
    </Flex>
  );
}
