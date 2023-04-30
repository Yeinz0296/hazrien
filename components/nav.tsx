// Nav.tsx
import React from "react";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-old-paper py-2 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="text-dark-slate-gray font-bold text-xl">Your Name</a>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about">
              <a className="text-dark-slate-gray hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="text-dark-slate-gray hover:underline">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/iot">
              <a className="text-dark-slate-gray hover:underline">IoT</a>
            </Link>
          </li>
          <li>
            <Link href="/data">
              <a className="text-dark-slate-gray hover:underline">Data</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}