// Footer.tsx
import React from "react";

export default function Footer() {
    return (
        <footer className="bg-old-paper py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-dark-olive-green font-bold text-xl">
                        Hazrien bin Nazman
                    </a>
                    <span className="mx-2 text-dark-olive-green">|</span>
                    <a href="/about" className="text-dark-olive-green hover:underline">
                        About
                    </a>
                </div>
                <div className="flex items-center">
                    <a href="/blog" className="text-dark-olive-green hover:underline mr-4">
                        Blog
                    </a>
                    <a href="/iot" className="text-dark-olive-green hover:underline mr-4">
                        IoT
                    </a>
                    <a href="/data" className="text-dark-olive-green hover:underline mr-4">
                        Data
                    </a>
                </div>
                <div className="text-dark-olive-green text-sm">
                    © {new Date().getFullYear()} Hazrien Nazman. All rights reserved.
                </div>
            </div>
        </footer>
    );
}