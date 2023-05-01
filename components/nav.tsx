// Nav.tsx
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-old-paper py-2 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <span className="text-dark-slate-gray font-bold text-xl">ME!</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              <span className="text-dark-slate-gray hover:underline">About</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="text-dark-slate-gray hover:underline">Blog</span>
            </Link>
          </li>
          <li>
            <Link href="/iot">
              <span className="text-dark-slate-gray hover:underline">IoT</span>
            </Link>
          </li>
          <li>
            <Link href="/data">
              <span className="text-dark-slate-gray hover:underline">Data</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}