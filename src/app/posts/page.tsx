import PostCard from "@/components/atoms/PostCard";
import PostGrid from "@/components/molecules/PostGrid";
import { getFeaturedPosts } from "@/service/post";
import React from "react";

export default async function PostsPage() {
  const posts = await getFeaturedPosts();
  return (
    <div className="flex flex-col gap-32 px-10 py-10">
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold my-2">Ilsang Posts</h2>
        <PostGrid posts={posts} />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold my-2">Tips Posts</h2>
        <PostGrid posts={posts} />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-xl font-bold my-2">Next Posts</h2>
        <PostGrid posts={posts} />
      </div>
    </div>
  );
}
