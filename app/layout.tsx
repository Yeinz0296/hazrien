import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Nav from "../components/nav";
import './globals.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-old-paper">
      <Header />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}