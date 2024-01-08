"use client";
import HomeIcon from "@/components/icon/HomeIcon";
import { BlogItemType } from "@/type/BlogItemType";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Col, Flex, Row, Spin } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import { useEffect } from "react";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const { data, isError, isLoading, isSuccess, refetch } = useQuery<any>({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8080/blogs/${params.slug}`);
      return res.json();
    },
    refetchOnWindowFocus: true,
  });
  useEffect(() => {
    refetch();
  }, [refetch]);

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
  const blog: BlogItemType = data;
  const menuItems = [
    {
      href: "/",
      title: (
        <Flex gap={4} justify="start" align="center">
          <HomeIcon width={16} height={16} />
          <Paragraph className="font-bold" style={{ margin: "0" }}>
            Home
          </Paragraph>
        </Flex>
      ),
    },
    {
      href: `/blogs/${params.slug}`,
      title: blog.title,
    },
  ];

  const postItem = [
    {
      icon: <HomeIcon width={16} height={16} />,
      title: "Publish",
      content: `${new Date(blog.publishDate).toLocaleDateString()}`
    },
    {
      icon: <HomeIcon width={16} height={16} />,
      title: "Comments",
      content: `${blog.commentsCount}`
    },

    {
      icon: <HomeIcon width={16} height={16} />,
      title: "Category",
      content: `${blog.tags}`
    },
  ];

  return (
    <Flex vertical className="flex w-full justify-start" gap={24}>
      <Breadcrumb items={menuItems} separator=">" />
      <Row>
        <Col span={18} className="flex flex-col gap-6">
          <Flex className="rounded-xl bg-[#F5F5F5] p-6" vertical>
            <Paragraph className="text-center text-4xl font-normal">
              {blog.title}
            </Paragraph>
            <Flex className="max-h-[400px] overflow-hidden rounded-xl">
              <Image
                priority
                alt="example"
                src={`https://source.unsplash.com/random/${blog.id}`}
                width={1000}
                height={1000}
                className="object-cover"
              />
            </Flex>
          </Flex>
          <Flex gap={80} className="justify-center">
            {postItem.map((item) => (
              <Flex key={item.title} gap={4} justify="center" align="center">
                {item.icon}
                <Paragraph
                  className="text-sm font-light"
                  style={{ margin: "0" }}
                >
                  {`${item.title} : ${item.content}`}
                </Paragraph>
              </Flex>
            ))}
          </Flex>
        </Col>
        <Col span={2}></Col>
        <Col span={4}>
          <Paragraph className="font-bold">Content</Paragraph>
        </Col>
      </Row>
    </Flex>
  );
}
