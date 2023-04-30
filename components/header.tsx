// Header.tsx
import React from "react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="bg-old-paper py-8">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg mr-4">
                    <Image src="/images/profilePicture01-square.jpg" alt="Hazrien Nazman" width={128} height={128} />
                </div>
                <div className="text-center md:text-left">
                    <h1 className="text-dark-slate-gray text-4xl font-amatic-sc">Hi, I'm Hazrien bin Nazman</h1>
                    <p className="text-dark-slate-gray text-xl font-old-standard-tt">I'm a web developer, IoT enthusiast, and data analyst.</p>
                </div>
            </div>
        </header>
    );
}