import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React",
      src: "/images/logos/react.png",

      className: "h-10 w-14",
    },
    {
      title: "Angular",
      src: "/images/logos/angular.png",

      className: "h-10 w-14",
    },
    {
      title: "Next.js",
      src: "/images/logos/next.png",

      className: "h-10 w-14",
    },
    {
      title: "jQuery",
      src: "/images/logos/jquery.png",

      className: "h-10 w-10",
    },
    {
      title: "JavaScript",
      src: "/images/logos/js.png",

      className: "h-10 w-10",
    },
    {
      title: "TypeScript",
      src: "/images/logos/ts.png",

      className: "h-10 w-10",
    },
    {
      title: "Node",
      src: "/images/logos/node.png",

      className: "h-10 w-12",
    },
    {
      title: "Express.js",
      src: "/images/logos/expressjs.png",

      className: "h-10 w-12",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Bootstrap",
      src: "/images/logos/bootstrap.png",

      className: "h-10 w-24",
    },
    {
      title: "SCSS",
      src: "/images/logos/scss.png",

      className: "h-10 w-24",
    },
    {
      title: "MySQL",
      src: "/images/logos/mysql.png",

      className: "h-10 w-24",
    },
    {
      title: "Supabase",
      src: "/images/logos/supabase-1.png",

      className: "h-10 w-24",
    },
    {
      title: "MongoDB",
      src: "/images/logos/mongodb.png",

      className: "h-10 w-24",
    },
    {
      title: "Firebase",
      src: "/images/logos/firebase.png",

      className: "h-10 w-24",
    },
    {
      title: "Redux",
      src: "/images/logos/redux.png",

      className: "h-10 w-24",
    },
    {
      title: "Vercel",
      src: "/images/logos/vercel.png",

      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },
    {
      title: "Git",
      src: "/images/logos/git.png",

      className: "h-10 w-8",
    },
    {
      title: "Npm",
      src: "/images/logos/npm.png",

      className: "h-10 w-8",
    },
    {
      title: "Postman",
      src: "/images/logos/postman.png",

      className: "h-10 w-8",
    },
    {
      title: "Framer Motion",
      src: "/images/logos/framer.webp",

      className: "h-10 w-10",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
