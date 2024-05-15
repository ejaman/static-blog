import { Post } from "@/service/post";
import Image from "next/image";
import React from "react";

type Props = { post: Post };
export default function PostCard({ post }: Props) {
  const { title, description, date, category, path, featured } = post;
  return (
    <li className="">
      <div>
        <div>
          <Image src="" alt="card" />
        </div>
        <div>
          <div>{title}</div>
          <div>{description}</div>
          <div>{date}</div>
          <div>{category}</div>
        </div>
      </div>
    </li>
  );
}
