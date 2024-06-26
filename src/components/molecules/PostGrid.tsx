import { Post } from "@/service/post";
import React from "react";
import PostCard from "../atoms/PostCard";

type Props = { posts: Post[] };
export default function PostGrid({ posts }: Props) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {posts.map((post) => (
        <li key={post.path}>
          <PostCard key={post.path} post={post} />
        </li>
      ))}
    </ul>
  );
}
