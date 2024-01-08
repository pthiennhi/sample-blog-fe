import HeartIcon from "@/components/icon/HeartIcon";
import HomeIcon from "@/components/icon/HomeIcon";
import { HeaderItemType } from "@/type/HeaderItemType";
import { Flex } from "antd";
import Title from "antd/es/typography/Title";
import Link from "next/link";

export const HeaderItems: HeaderItemType[] = [
  {
    icon: (
      <Link href="/">
        <Flex align="center" justify="space-between" gap={6}>
          <HomeIcon width={16} height={16} />
          <Title level={5} style={{ margin: 0 }} >
            Home
          </Title>
        </Flex>
      </Link>
    ),
  },
  {
    icon: (
      <Link href="/about">
        <Flex align="center" justify="space-between" gap={6}>
          <HeartIcon width={16} height={16} />
          <Title level={5} style={{ margin: 0 }} >
            About
          </Title>
        </Flex>
      </Link>
    ),
  },
];
