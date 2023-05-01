import React from "react";

export default function Home() {
  return (
      <div className="container mx-auto py-8 px-4 md:px-0">
        <h2 className="text-dark-slate-gray text-3xl font-amatic-sc mb-4">Welcome to my website!</h2>
        <p className="text-dark-slate-gray text-xl font-old-standard-tt mb-4">
          I'm Hazrien, a web developer, IoT enthusiast, and data analyst. I love creating websites and applications using
          modern technologies like Next.js, Tailwind CSS, React, TypeScript, etc. I also enjoy working with IoT devices
          and data analysis using Python, MongoDB, etc.
        </p>
        <p className="text-dark-slate-gray text-xl font-old-standard-tt mb-4">
          On this website, you can find more information about me and my projects. You can also read my blog posts where
          I share tutorials and tips on web development, IoT, and data analysis. Feel free to contact me if you have any
          questions or feedback.
        </p>
        <div className="flex items-center space-x-4">
          <a href="https://github.com/yourname" target="_blank" rel="noopener noreferrer">
            <img src="/images/github.png" alt="Github" width={32} height={32} />
          </a>
          <a href="https://twitter.com/yourname" target="_blank" rel="noopener noreferrer">
            <img src="/images/twitter.png" alt="Twitter" width={32} height={32} />
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin.png" alt="LinkedIn" width={32} height={32} />
          </a>
          <a href="mailto:yourname@example.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/email.png" alt="Email" width={32} height={32} />
          </a>
        </div>
      </div>
  );
}