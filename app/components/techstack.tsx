'use client';

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const languages = {
  html5: {
    name: 'HTML5',
    svg: '/portfolio-website/techstack/html-5.svg',
    classname: '',
  },
  css3: {
    name: 'CSS3',
    svg: '/portfolio-website/techstack/css-3.svg',
    classname: '',
  },
  javascript: {
    name: 'JavaScript',
    svg: '/portfolio-website/techstack/javascript.svg',
    classname: '',
  },
  typescript: {
    name: 'TypeScript',
    svg: '/portfolio-website/techstack/typescript.svg',
    classname: '',
  },
  java: {
    name: 'Java',
    svg: '/portfolio-website/techstack/java.svg',
    classname: '',
  },
  python: {
    name: 'Python',
    svg: '/portfolio-website/techstack/python.svg',
    classname: '',
  },
  c: { name: 'C', svg: '/portfolio-website/techstack/c.svg', classname: '' },
  ruby: {
    name: 'Ruby',
    svg: '/portfolio-website/techstack/ruby.svg',
    classname: '',
  },
};

const frameworks = {
  react: {
    name: 'React',
    svg: '/portfolio-website/techstack/react.svg',
    classname: '',
  },
  nextjs: {
    name: 'Next.js',
    svg: '/portfolio-website/techstack/nextjs.svg',
    classname: 'dark:invert',
  },
  expo: {
    name: 'Expo',
    svg: '/portfolio-website/techstack/expo.svg',
    classname: 'dark:invert',
  },
  django: {
    name: 'Django',
    svg: '/portfolio-website/techstack/django.svg',
    classname: 'dark:invert',
  },
  jest: {
    name: 'Jest',
    svg: '/portfolio-website/techstack/jest.svg',
    classname: '',
  },
  postgresql: {
    name: 'PostgreSQL',
    svg: '/portfolio-website/techstack/postgresql.svg',
    classname: '',
  },
};

const others = {
  git: {
    name: 'Git',
    svg: '/portfolio-website/techstack/git.svg',
    classname: '',
  },
  figma: {
    name: 'Figma',
    svg: '/portfolio-website/techstack/figma.svg',
    classname: '',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    svg: '/portfolio-website/techstack/tailwindcss.svg',
    classname: '',
  },
  postman: {
    name: 'Postman',
    svg: '/portfolio-website/techstack/postman.svg',
    classname: '',
  },
  materialui: {
    name: 'Material UI',
    svg: '/portfolio-website/techstack/material-ui.svg',
    classname: '',
  },
};

export default function TechStack() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100); // Allowing some delay for a smooth effect
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`transition-opacity duration-1000 ease-in ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">
        Languages
      </h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(languages).map(
          ([language, { name, svg, classname }]) => (
            <Fragment key={language}>
              <Image
                src={svg}
                alt={name}
                width={50}
                height={50}
                data-tooltip-id={language}
                data-tooltip-content={name}
                data-tooltip-place="bottom"
                className={classname}
              />
              <Tooltip id={language}>{name}</Tooltip>
            </Fragment>
          )
        )}
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">
        Frameworks
      </h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(frameworks).map(
          ([framework, { name, svg, classname }]) => (
            <Fragment key={framework}>
              <Image
                src={svg}
                alt={name}
                width={50}
                height={50}
                data-tooltip-id={framework}
                data-tooltip-content={name}
                data-tooltip-place="bottom"
                className={classname}
              />
              <Tooltip id={framework}>{name}</Tooltip>
            </Fragment>
          )
        )}
      </div>
      <h1 className="text-2xl font-semibold tracking-tighter mb-1">Others</h1>
      <div className="flex flex-wrap gap-4 mb-2">
        {Object.entries(others).map(([other, { name, svg, classname }]) => (
          <Fragment key={other}>
            <Image
              src={svg}
              alt={name}
              width={50}
              height={50}
              data-tooltip-id={other}
              data-tooltip-content={name}
              data-tooltip-place="bottom"
              className={classname}
            />
            <Tooltip id={other}>{name}</Tooltip>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
