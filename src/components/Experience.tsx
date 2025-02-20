import React from 'react';
import { FaRegCircle } from "react-icons/fa";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience</h2>
        {/* Add your experience content here */}
        <div className="space-y-6">
          {/* Example experience item */}
          <div className="border-l-2 border-foreground pl-4">
            <h3 className="text-lg sm:text-xl font-semibold">Vngle Grassroots News Agency</h3>
            <p className="lg:text-sm sm:text-sm opacity-80">Mobile Engineer Fellow</p>
            <p className="lg:text-sm sm:text-sm opacity-40">Jun 2024 - Present</p>
            <ul className="list-disc list-inside mt-2 lg:text-sm sm:text-base">
              <li>Facilitated the development of a news reporting application with generated metadata, blockchain hash
              storage and in-app file compression and upload for Android and iOS devices with improved UI.</li>
              <li>Implemented media provenance for videos and images sourced between Vngle and partnered media
              companies using eWitness blockchain API and node packages.</li>
              <li>Improved CMS with optimized media processing for file compression and 50% faster upload speed using node packages, AWS services and SDK’s.</li>
            </ul>
          </div>
        </div>
        <FaRegCircle className="opacity-50 my-3 -mx-1 w-3 h-3" />
        <div className="border-l-2 border-foreground pl-4">
          <h3 className="text-lg sm:text-xl font-semibold">NYC Tech Talent Pipeline</h3>
          <p className="lg:text-sm sm:text-sm opacity-80">Full-stack Developer Fellow</p>
          <p className="lg:text-sm sm:text-sm opacity-40">Jun 2023 - Feb 2024</p>
          <ul className="list-disc list-inside mt-2 lg:text-sm sm:text-base">
            <li>Participate in bootcamps aimed at enhancing technical skills and preparing for future career opportunities.</li>
            <li>Engaged in career readiness workshops, professional development, and networking events to build a strong foundation for transitioning into full-time tech.</li>
            <li>Developed functional apps, servers, and databases using programming tools such as React, Node.js, Git, PostgreSQL, and REST API during a 10-week bootcamp.</li>
            <li>Built and hosted a fully functional Single-page web application hosted on GitHub and presented it as capstone project to facilitators and peers.</li>
          </ul>
        </div>
        <FaRegCircle className="opacity-50 my-3 -mx-1 w-3 h-3" />
        <div className="border-l-2 border-foreground pl-4">
          <h3 className="text-lg sm:text-xl font-semibold">RecProf</h3>
          <p className="lg:text-sm sm:text-sm opacity-80">Web Developer</p>
          <p className="lg:text-sm sm:text-sm opacity-40">May 2021 - Jul 2022</p>
          <ul className="list-disc list-inside mt-2 lg:text-sm sm:text-base">
            <li>Maintained and optimized the company's WordPress website by managing dashboard plugins, creating a database for blog posts and comments, and installing security access tools.</li>
            <li>Enhanced UX/UI, improving website functionality and ensuring seamless functionality for better user
            experience.</li>
            <li>Provided creative designs and production of books for catalog improvement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 