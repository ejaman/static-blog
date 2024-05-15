import React from "react";
import { getFeaturedPosts } from "@/service/post";
import PostGrid from "../molecules/PostGrid";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <PostGrid posts={posts} />
    </section>
  );
}
