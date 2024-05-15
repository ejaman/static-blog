import { readFile } from "fs/promises";
import path from "path";

export type Category = "Ilsang" | "tips" | "next";

export type Post = {
  title: string;
  description: string;
  date: string;
  category: Category;
  path: string;
  featured: boolean;
};

export async function getAllPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return (
    readFile(filePath, "utf-8")
      // .then<Post[]>((data) => JSON.parse(data))
      .then<Post[]>(JSON.parse) // 위와 같은 코드
      .then((posts) => posts.sort((a, b) => (a.date > b.date ? 1 : -1)))
  );
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  return readFile(filePath, "utf-8")
    .then<Post[]>(JSON.parse) // 위와 같은 코드
    .then((posts) =>
      posts
        .filter((post) => post.featured)
        .sort((a, b) => (a.date > b.date ? 1 : -1))
    );
}
