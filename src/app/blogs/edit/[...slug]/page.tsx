"use client";
import React from "react";

export default function BlogEdit({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
