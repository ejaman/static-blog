import Link from "next/link";
import React from "react";

// TODO
// 각 페이지로 이동 가능한 nav를 포함시키기
export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href="/">
        <h1 className="text-2xl font-bold">Static Blog</h1>
      </Link>
      <nav className="flex gap-3">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
