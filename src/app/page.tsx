"use client";

import EditIcon from "@/components/icon/EditIcon";
import { BlogItemType } from "@/type/BlogItemType";
import { useQuery } from "@tanstack/react-query";
import {
  Avatar,
  Button,
  Card,
  Flex,
  Spin,
  Typography
} from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { format } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";

const { Title } = Typography;

export default function Home() {
  const router = useRouter();
  const { data, isError, isLoading, isSuccess } = useQuery<any>({
    queryKey: ["allBlogs"],
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
    <>
      <Title level={2}>Blogs List</Title>
      <Flex className="flex flex-wrap">
        {blogs.map((blog) => (
          <div className="w-full md:w-1/2 px-4 mb-8" key={blog.id}>
            <Card
              hoverable
              style={{ borderRadius: "12px" }}
              bordered={false}
              className="shadow relative"
              bodyStyle={{ padding: "10px" }}
            >
              <Button
                className="flex items-center justify-center absolute right-1 top-1"
                shape="circle"
                icon={
                  <EditIcon width={16} height={16} className="text-gray-600" />
                }
                onClick={() =>
                  router.push(`/blogs/edit/${blog.id}`, { scroll: false })
                }
              />
              <Flex
                vertical
                gap={12}
                className="max-w-full"
                onClick={() =>
                  router.push(`/blogs/${blog.id}`, { scroll: false })
                }
              >
                <Flex
                  className="max-w-full"
                  style={{ height: "100%" }}
                  gap={24}
                >
                  <Image
                    priority
                    alt="example"
                    src={`https://source.unsplash.com/random/${blog.id}`}
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
                      className="font-bold pr-6"
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
                          style={{ margin: 0 }}
                          className="text-gray-600 text-[10px]"
                        >
                          {format(new Date(blog.publishDate), "dd MMM yyyy")}
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
  );
}
