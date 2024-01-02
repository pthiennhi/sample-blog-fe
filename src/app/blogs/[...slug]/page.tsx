"use client";
import HomeIcon from "@/components/icon/HomeIcon";
import { BlogItemType } from "@/type/BlogItemType";
import { useQuery } from "@tanstack/react-query";
import { Breadcrumb, Flex, Spin } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:8080/blogs/${params.slug}`);
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

  return (
    <Flex vertical className="flex w-full justify-start">
      <Breadcrumb items={menuItems} separator=">" />
      <Flex gap={24}>
        <Flex vertical>
          <Paragraph className="font-bold">{blog.title}</Paragraph>
          <Image
            priority
            alt="example"
            src={`https://source.unsplash.com/random/${blog.id}`}
            width={1000}
            height={1000}
            // className="max-w-64 xl:max-w-[320px] h-36 object-cover rounded-xl flex-shrink-0"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
