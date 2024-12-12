'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Tooltip } from 'react-tooltip';

const languages = {
  html5: { name: 'HTML5', svg: '/portfolio-website/techstack/html-5.svg' },
  css3: { name: 'CSS3', svg: '/portfolio-website/techstack/css-3.svg' },
  javascript: {
    name: 'JavaScript',
    svg: '/portfolio-website/techstack/javascript.svg',
  },
  typescript: {
    name: 'TypeScript',
    svg: '/portfolio-website/techstack/typescript.svg',
  },
  java: { name: 'Java', svg: '/portfolio-website/techstack/java.svg' },
  python: { name: 'Python', svg: '/portfolio-website/techstack/python.svg' },
  c: { name: 'C', svg: '/portfolio-website/techstack/c.svg' },
  ruby: { name: 'Ruby', svg: '/portfolio-website/techstack/ruby.svg' },
};

const frameworks = {
  react: { name: 'React', svg: '/portfolio-website/techstack/react.svg' },
  nextjs: { name: 'Next.js', svg: '/portfolio-website/techstack/nextjs.svg' },
  expo: { name: 'Expo', svg: '/portfolio-website/techstack/expo.svg' },
  django: { name: 'Django', svg: '/portfolio-website/techstack/django.svg' },
  jest: { name: 'Jest', svg: '/portfolio-website/techstack/jest.svg' },
  postgresql: {
    name: 'PostgreSQL',
    svg: '/portfolio-website/techstack/postgresql.svg',
  },
};

const others = {
  git: { name: 'Git', svg: '/portfolio-website/techstack/git.svg' },
  figma: { name: 'Figma', svg: '/portfolio-website/techstack/figma.svg' },
  tailwindcss: {
    name: 'Tailwind CSS',
    svg: '/portfolio-website/techstack/tailwindcss.svg',
  },
  postman: { name: 'Postman', svg: '/portfolio-website/techstack/postman.svg' },
  materialui: {
    name: 'Material UI',
    svg: '/portfolio-website/techstack/material-ui.svg',
  },
};

export default function TechStack() {
  return (
    <div className="">
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">
        Languages
      </h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(languages).map(([language, { name, svg }]) => (
          <Fragment key={language}>
            <Image
              src={svg}
              alt={name}
              width={50}
              height={50}
              data-tooltip-id={language}
              data-tooltip-content={name}
              data-tooltip-place="bottom"
            />
            <Tooltip id={language}>{name}</Tooltip>
          </Fragment>
        ))}
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">
        Frameworks
      </h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(frameworks).map(([framework, { name, svg }]) => (
          <Fragment key={framework}>
            <Image
              src={svg}
              alt={name}
              width={50}
              height={50}
              data-tooltip-id={framework}
              data-tooltip-content={name}
              data-tooltip-place="bottom"
            />
            <Tooltip id={framework}>{name}</Tooltip>
          </Fragment>
        ))}
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">Others</h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(others).map(([other, { name, svg }]) => (
          <Fragment key={other}>
            <Image
              src={svg}
              alt={name}
              width={50}
              height={50}
              data-tooltip-id={other}
              data-tooltip-content={name}
              data-tooltip-place="bottom"
            />
            <Tooltip id={other}>{name}</Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
