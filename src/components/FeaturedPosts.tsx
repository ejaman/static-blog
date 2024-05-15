import React from "react";
import { getAllPosts } from "@/service/post";
import PostGrid from "./PostGrid";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <section>
      <PostGrid posts={posts} />
    </section>
  );
}
