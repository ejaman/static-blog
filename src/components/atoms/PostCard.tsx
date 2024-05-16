import { Post } from "@/service/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { post: Post };
export default function PostCard({
  post: { title, description, date, category, path, featured },
}: Props) {
  return (
    <Link href={`/post/${path}`} className="">
      <article className="rounded-sm overflow-hidden shadow-sm md:hover:transform md:hover:-translate-y-2 transition-transform duration-300">
        <Image
          className="w-full"
          width={220}
          height={150}
          src={`/images/posts/${path}.png`}
          alt={`${path}-card`}
        />
        <div className="flex flex-col p-4">
          <div className="text-base font-semibold">{title}</div>
          <p className="w-full truncate text-sm">{description}</p>
          <time className="text-xs">{date.toString()}</time>
          <div className="text-xs self-end font-semibold">{category}</div>
        </div>
      </article>
    </Link>
  );
}
