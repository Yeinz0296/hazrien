// Post.tsx
import React from "react";
import Link from "next/link";

interface PostProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function Post({ title, date, excerpt, slug }: PostProps) {
  return (
    <div className="bg-pale-goldenrod p-4 rounded-lg shadow-lg">
      <h2 className="text-dark-slate-gray text-2xl font-amatic-sc mb-2">
        <Link href={`/blog/${slug}`}>
          <a>{title}</a>
        </Link>
      </h2>
      <p className="text-dark-slate-gray text-sm font-old-standard-tt mb-4">{date}</p>
      <p className="text-dark-slate-gray text-base font-old-standard-tt mb-4">{excerpt}</p>
      <Link href={`/blog/${slug}`}>
        <a className="text-dark-slate-gray hover:underline">Read more</a>
      </Link>
    </div>
  );
}