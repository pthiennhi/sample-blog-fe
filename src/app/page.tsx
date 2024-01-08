"use client";

import EditIcon from "@/components/icon/EditIcon";
import { BlogItemType } from "@/type/BlogItemType";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Card, Flex, Spin, Typography } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const { Title } = Typography;

export default function Home() {
  const router = useRouter();
  const { data, isError, isLoading, isSuccess, refetch } = useQuery<any>({
    queryKey: ["allBlogs"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8080/blogs");
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

  const blogs: BlogItemType[] = Array.isArray(data) ? data : [];

  return (
    Array.isArray(blogs) &&
    isSuccess && (
      <>
        <Title level={2}>Blogs List</Title>
        <Flex className="flex flex-wrap">
          {blogs.map((blog) => (
            <div className="mb-8 w-full px-4 md:w-1/2" key={blog.id}>
              <Card
                hoverable
                style={{ borderRadius: "12px" }}
                bordered={false}
                className="relative h-full shadow"
                bodyStyle={{ padding: "10px" }}
              >
                <Button
                  className="absolute right-1 top-1 flex items-center justify-center"
                  shape="circle"
                  icon={
                    <EditIcon
                      width={16}
                      height={16}
                      className="text-gray-600"
                    />
                  }
                  onClick={() =>
                    router.push(`/blogs/edit/${blog.id}`, { scroll: false })
                  }
                />
                <Flex
                  vertical
                  gap={12}
                  onClick={() =>
                    router.push(`/blogs/${blog.id}`, { scroll: false })
                  }
                >
                  <Flex gap={24} justify="stretch">
                    <Flex className="max-h-36 max-w-64 flex-shrink-0 overflow-hidden rounded-xl">
                      <Image
                        priority
                        alt="example"
                        src={`https://source.unsplash.com/random/${blog.id}`}
                        width={"1000"}
                        height={"1000"}
                        // layout="responsive"
                        className="object-cover"
                      />
                    </Flex>
                    <Flex vertical justify="space-between">
                      <Paragraph
                        ellipsis={{ rows: 2, expandable: false }}
                        className="pr-6 font-bold"
                      >
                        {blog.title}{" "}
                      </Paragraph>
                      <Paragraph
                        ellipsis={{ rows: 2, expandable: false }}
                        className="text-xs font-light"
                      >
                        {blog.content}
                      </Paragraph>
                      <Flex
                        className="rounded-lg bg-slate-100 p-2"
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
                            style={{ margin: 0 }}
                            className="text-[10px] text-gray-600"
                          >
                            {new Date(blog.publishDate).toLocaleDateString()}
                          </Paragraph>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex gap={4}>
                    {blog.tags.map((tag, i) => (
                      <Paragraph
                        key={tag}
                        className="font-mono text-sm text-gray-700 hover:bg-slate-200"
                      >
                        {`#${tag}`}
                      </Paragraph>
                    ))}
                  </Flex>
                </Flex>
              </Card>
            </div>
          ))}
        </Flex>
      </>
    )
  );
}
