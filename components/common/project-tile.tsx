"use client";

import { Project } from "@/types";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import styles from "./project-tile.module.css";
import { urlForImage } from "@/sanity/lib/image";

interface ProjectTileProps {
  project: Project;
  animationEnabled: boolean;
}

const ProjectTile = ({ project, animationEnabled }: ProjectTileProps) => {
  const projectCard: MutableRefObject<HTMLDivElement> = useRef(null);
  const { name, tech, image, description, gradient } = project;
  const [stop1, stop2] = gradient || ["#000000", "#000000"];

  useEffect(() => {
    if (projectCard.current) {
      VanillaTilt.init(projectCard.current, {
        max: 5,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        gyroscope: false,
      });
    }
  }, [projectCard]);

  if (!project) return null;

  const renderTechIcons = (techStack: Project["tech"]): React.ReactNode => (
    <div
      className={`${styles.techIcons} w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden`}
    >
      <div className="flex flex-col pb-8">
        {techStack?.map((tech, i) => (
          <div className={`${i % 2 === 0 && "ml-16"} mb-4`} key={tech.slug}>
            <Image
              src={urlForImage(tech.icon)}
              alt={tech.name}
              width={45}
              height={45}
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
    </div>
  );

  const renderDescription = (description: string): React.ReactNode => (
    <h2
      className="text-lg z-10 tracking-wide font-medium text-white"
      style={{ transform: "translateZ(0.8rem)" }}
    >
      {description}
    </h2>
  );

  const renderProjectName = (name: string): React.ReactNode => (
    <h1
      className="text-2xl sm:text-3xl z-10 pl-2 text-white"
      style={{ transform: "translateZ(3rem)" }}
    >
      {name}
    </h1>
  );

  const renderTopBottomGradient = (gradient: string): React.ReactNode => (
    <>
      <div
        className="absolute top-0 left-0 w-full h-20"
        style={{
          background: `linear-gradient(180deg, ${gradient} 0%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-full h-32"
        style={{
          background: `linear-gradient(0deg, ${gradient} 10%, rgba(0,0,0,0) 100%)`,
        }}
      ></div>
    </>
  );

  const renderProjectImage = (image: any, name: string): React.ReactNode => (
    <Image
      src={urlForImage(image)}
      alt={name}
      fill
      className={`${styles.ProjectImg} z-0`}
    />
  );

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="link overflow-hidden rounded-3xl snap-start"
      style={{
        maxWidth: animationEnabled
          ? "calc(100vw - 2rem)"
          : "calc(100vw - 4rem)",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={projectCard}
        className={`${styles.ProjectTile} rounded-3xl relative p-6 flex-col flex justify-between max-w-full`}
        style={{
          background: `linear-gradient(90deg, ${stop1} 0%, ${stop2} 100%)`,
        }}
      >
        <Image
          src="/project-bg.svg"
          alt="Project"
          fill
          className="absolute w-full h-full top-0 left-0 opacity-20"
        />
        {renderProjectImage(image, name)}
        {renderTopBottomGradient(stop1)}
        {renderProjectName(name)}
        {renderTechIcons(tech)}
        {renderDescription(description)}
      </div>
    </a>
  );
};

export default ProjectTile;
