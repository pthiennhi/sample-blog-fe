"use client";

import logo from "@/../public/logo_vietnam_black.png";
import { HeaderItems } from "@/constants/HearderItems";
import { Button, Flex, Input, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";
import Image from "next/image";
import SearchIcon from "./icon/SearchIcon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const { Search } = Input;

const items: MenuItemType[] = HeaderItems.map((item, i) => ({
  ...item,
  key: i.toString(),
}));

export default function HeaderLayout() {
  const pathname = usePathname();

  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  useEffect(() => {}, []);

  useEffect(() => {
    const pathKeyMap = {
      "/": ["0"],
      "/about": ["1"],
    };

    setSelectedKeys(pathKeyMap[pathname as keyof typeof pathKeyMap] || []);
  }, [pathname]);

  return (
    <Flex className="fixed z-50 w-full px-24">
      <Flex
        className="my-4 h-16 min-w-full flex-1 rounded-2xl bg-[#fafafa] px-4 shadow-sm"
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
          selectedKeys={selectedKeys}
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
    </Flex>
  );
}
