import React from "react";
import { getFeaturedPosts } from "@/service/post";
import PostGrid from "../molecules/PostGrid";

export default async function FeaturedPosts() {
  // app폴더 안 모든 컴포넌트는 서버 컴포넌트
  // 서버에 있는 파일 읽고 쓰기 가능!
  const posts = await getFeaturedPosts();

  return (
    <section>
      <div className="text-2xl font-bold my-2">Featured Posts</div>
      <PostGrid posts={posts} />
    </section>
  );
}
