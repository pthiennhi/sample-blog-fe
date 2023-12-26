"use client";

import { Button, Card, ConfigProvider, Flex } from "antd";
import theme from "../theme/themeConfig";
import Image from "next/image";

const { Meta } = Card;

export default function Home() {
  return (
    <ConfigProvider theme={theme}>
      <Flex vertical className="App w-full">
        <Card hoverable className="w-full">
          <Flex className="w-full" gap={24}>
            <Image
              priority
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              width={240}
              height={240}
              className="w-1/3"
            />
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Flex>
        </Card>
      </Flex>
    </ConfigProvider>
  );
}
