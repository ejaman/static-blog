import { Post } from "@/service/post";
import React from "react";
import PostCard from "./PostCard";

type Props = { posts: Post[] };
export default function PostGrid({ posts }: Props) {
  return (
    <ul>
      {posts.map((post) => (
        // <li key={post.path}>{post.title}</li>
        <PostCard key={post.path} post={post} />
      ))}
    </ul>
  );
}
