import React from "react";
import Layout from "../layout";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto py-8 px-4 md:px-0">
        <h2 className="text-dark-slate-gray text-3xl font-amatic-sc mb-4">About me</h2>
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-4">
          <div className="col-span-1 bg-pale-goldenrod p-4 rounded-lg shadow-lg">
            <h3 className="text-dark-slate-gray text-xl font-amatic-sc mb-2">Resume</h3>
            {/* TODO: Add code to display your resume */}
          </div>
          <div className="col-span-1 bg-pale-goldenrod p-4 rounded-lg shadow-lg">
            <h3 className="text-dark-slate-gray text-xl font-amatic-sc mb-2">Portfolio</h3>
            {/* TODO: Add code to display your portfolio */}
          </div>
        </div>
      </div>
    </Layout>
  );
}