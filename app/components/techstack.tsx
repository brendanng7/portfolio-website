'use client';

import Image from 'next/image';
import { Fragment } from 'react';
import { Tooltip } from 'react-tooltip';

const languages = {
  html5: { name: 'HTML5', svg: '/techstack/html-5.svg' },
  css3: { name: 'CSS3', svg: '/techstack/css-3.svg' },
  javascript: {
    name: 'JavaScript',
    svg: '/techstack/javascript.svg',
  },
  typescript: {
    name: 'TypeScript',
    svg: '/techstack/typescript.svg',
  },
  java: { name: 'Java', svg: '/techstack/java.svg' },
  python: { name: 'Python', svg: '/techstack/python.svg' },
  c: { name: 'C', svg: '/techstack/c.svg' },
  ruby: { name: 'Ruby', svg: '/techstack/ruby.svg' },
};

const frameworks = {
  react: { name: 'React', svg: '/techstack/react.svg' },
  nextjs: { name: 'Next.js', svg: '/techstack/nextjs.svg' },
  expo: { name: 'Expo', svg: '/techstack/expo.svg' },
  django: { name: 'Django', svg: '/techstack/django.svg' },
  jest: { name: 'Jest', svg: '/techstack/jest.svg' },
  postgresql: { name: 'PostgreSQL', svg: '/techstack/postgresql.svg' },
};

const others = {
  git: { name: 'Git', svg: '/techstack/git.svg' },
  figma: { name: 'Figma', svg: '/techstack/figma.svg' },
  tailwindcss: { name: 'Tailwind CSS', svg: '/techstack/tailwindcss.svg' },
  postman: { name: 'Postman', svg: '/techstack/postman.svg' },
  materialui: { name: 'Material UI', svg: '/techstack/material-ui.svg' },
};

export default function TechStack() {
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tighter">Languages</h1>
      <div className="flex flex-wrap gap-4">
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
      <h1 className="text-lg font-semibold tracking-tighter">Frameworks</h1>
      <div className="flex flex-wrap gap-4">
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
      <h1 className="text-lg font-semibold tracking-tighter">Others</h1>
      <div className="flex flex-wrap gap-4">
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
