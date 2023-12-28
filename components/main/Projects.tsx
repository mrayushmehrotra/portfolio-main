import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/spotify.webp"
          title="Spotify Next.js Clone"
          description="A Spotify Clone Build in Nextjs with Supabase, radix UI, zustand, while following clean code while following OOPS, "
        />
        <ProjectCard
          src="/notion.jpg"
          title="Notion AI Clone"
          description="A Notion Clone build in Next js with OPENAI API Integration, and Clerk Auth and Using Quill library."
        />
        <ProjectCard
          src="/ecommerce.webp"
          title="Ecommerce Backend"
          description="A Ecommerce Backend built in Nodejs and Express, with Middleware , Authentication , Admin section , Functionality a Ecommerce have ."
        />
        <ProjectCard
          src="/zip.png"
          title="Zipper"
          description="A Complete File Zipper and UnZipper built in Rust and GO follows Data compression pattern "
        />
      </div>
    </div>
  );
};

export default Projects;
