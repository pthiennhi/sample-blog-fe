"use client";

import { Avatar, Card, ConfigProvider, Flex, Spin, Typography } from "antd";
import Image from "next/image";
import theme from "../theme/themeConfig";
import { useQuery } from "@tanstack/react-query";
import { BlogItemType } from "@/type/BlogItemType";
import Paragraph from "antd/es/typography/Paragraph";

const { Title } = Typography;

export default function Home() {
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ["test"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/blogs");
      return res.json();
    },
  });

  if (isError)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p className="text-red-500">Error</p>
      </main>
    );

  if (isLoading)
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Spin />
      </main>
    );

  const blogs: BlogItemType[] = data;

  return (
    <ConfigProvider theme={theme}>
      <Title level={2}>Blogs List</Title>
      <Flex className="flex flex-wrap">
        {blogs.map((blog) => (
          <div className="w-full md:w-1/2 px-4 mb-8" key={blog.id}>
            <Card
              hoverable
              style={{ borderRadius: "12px" }}
              bordered={false}
              className="shadow"
              bodyStyle={{ padding: "10px" }}
            >
              <Flex className="max-w-full" style={{ height: "100%" }} gap={24}>
                <Image
                  priority
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                  width={1000}
                  height={1000}
                  className="max-w-64 xl:max-w-[320px] h-36 object-cover rounded-xl flex-shrink-0"
                />
                <Flex
                  vertical
                  style={{ width: "100%" }}
                  justify="space-between"
                >
                  <Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                    className="font-bold"
                  >
                    {blog.title}{" "}
                  </Paragraph>
                  <Paragraph
                    ellipsis={{ rows: 2, expandable: false }}
                    className="font-light text-xs"
                  >
                    {blog.content}
                  </Paragraph>
                  <Flex
                    className="bg-slate-100 p-2 rounded-lg"
                    style={{ width: "100%" }}
                    gap={8}
                  >
                    <Avatar
                      shape="square"
                      src={"https://source.unsplash.com/random/300x300"}
                    />
                    <Flex vertical justify="space-between">
                      <Paragraph
                        strong
                        style={{ margin: 0 }}
                        className="text-xs"
                      >
                        {blog.authorName}
                      </Paragraph>
                      <Paragraph
                        
                        className="text-gray-600 text-[10px]"
                      >
                        {blog.createdAt}
                      </Paragraph>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Card>
          </div>
        ))}
      </Flex>
    </ConfigProvider>
  );
}
