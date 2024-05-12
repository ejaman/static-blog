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
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/posts">posts</Link>
        <Link href="/contact">contact</Link>
      </nav>
    </header>
  );
}
