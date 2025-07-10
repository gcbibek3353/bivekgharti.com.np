"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
}

export function Projects() {
  const [projects] = useState<Project[]>([
    {
      title: "JivanMitra",
      description:
        "JivanMitra is a AI-voice health Assistant which lets patients get the preliminary treatment and identification of cause with ease using AI.",
      githubUrl: "https://github.com/gcbibek3353/JivanMitra",
      liveUrl: "https://jivan-mitra.vercel.app/",
    },
    {
      title: "AlumUnity",
      description:
        "Alumunity is the plattform for connection alumini's with the students.",
      githubUrl: "https://github.com/gcbibek3353/AlumUnity",
      liveUrl: "https://alum-unity.vercel.app/",
    },

  ]);

  return (
    <section className="space-y-6">
      <h2 className="text-lg font-bold border-b border-border pb-1 mb-3">
        PROJECTS
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col justify-between space-y-3 p-4 rounded-lg border border-border bg-white dark:bg-secondary shadow-md h-full"
          >
            <div>
              <h3 className="font-semibold text-lg mb-2 text-primary">
                {project.title}
              </h3>
              <p className="text-secondary-foreground">{project.description}</p>
            </div>
            <div className="flex justify-end gap-1 pt-2">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="rounded-full p-2 transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
