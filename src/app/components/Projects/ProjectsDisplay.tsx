"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData | string;
  alt: string;
}

interface ProjectsDisplayProps {
  projects: Project[];
}

export default function ProjectsDisplay({ projects }: ProjectsDisplayProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(() => {
    // Check if there's a hash in the URL on initial load
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      return projects.find((project) => project.id === hash) || null;
    }
    return null;
  });

  // Effect to handle hash changes in the URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      const project = projects.find((project) => project.id === hash);

      if (project) {
        setSelectedProject(project);
        document.body.style.overflow = "hidden";
      } else {
        setSelectedProject(null);
        document.body.style.overflow = "auto";
      }
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Initial check on mount
    handleHashChange();

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [projects]);

  const openModal = (project: Project) => {
    // Update state directly
    setSelectedProject(project);
    document.body.style.overflow = "hidden";

    // Update URL hash
    window.location.hash = project.id;
  };

  const closeModal = () => {
    // Update state directly
    setSelectedProject(null);
    document.body.style.overflow = "auto";

    // Remove hash from URL
    if (window.history.pushState) {
      window.history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    } else {
      // Fallback for older browsers
      window.location.hash = "";
    }
  };

  return (
    <>
      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
            onClick={() => openModal(project)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-700/50 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-gray-700/50 rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-neutral-900 rounded-lg w-full max-w-6xl max-h-[95dvh] overflow-hidden z-10 flex flex-col">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white bg-neutral-800/80 rounded-full p-2 z-20"
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-6 overflow-y-auto">
              <h2 className="text-3xl font-semibold mb-6">
                {selectedProject.title}
              </h2>

              <div className="relative w-full mb-8 overflow-auto max-h-[60vh]">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.alt}
                  width={3000}
                  height={2000}
                  className="w-full h-auto rounded-lg"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>

              <p className="text-gray-300 mb-6 text-lg">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h3 className="text-xl font-medium mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1.5 bg-gray-700/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
