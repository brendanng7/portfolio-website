'use client';

import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const languages = {
  html5: {
    name: 'HTML5',
    svg: '/techstack/html-5.svg',
    classname: '',
  },
  css3: {
    name: 'CSS3',
    svg: '/techstack/css-3.svg',
    classname: '',
  },
  javascript: {
    name: 'JavaScript',
    svg: '/techstack/javascript.svg',
    classname: '',
  },
  typescript: {
    name: 'TypeScript',
    svg: '/techstack/typescript.svg',
    classname: '',
  },
  java: {
    name: 'Java',
    svg: '/techstack/java.svg',
    classname: '',
  },
  python: {
    name: 'Python',
    svg: '/techstack/python.svg',
    classname: '',
  },
  c: { name: 'C', svg: '/techstack/c.svg', classname: '' },
  ruby: {
    name: 'Ruby',
    svg: '/techstack/ruby.svg',
    classname: '',
  },
};

const frameworks = {
  react: {
    name: 'React',
    svg: '/techstack/react.svg',
    classname: '',
  },
  nextjs: {
    name: 'Next.js',
    svg: '/techstack/nextjs.svg',
    classname: 'dark:invert',
  },
  expo: {
    name: 'Expo',
    svg: '/techstack/expo.svg',
    classname: 'dark:invert',
  },
  django: {
    name: 'Django',
    svg: '/techstack/django.svg',
    classname: 'dark:invert',
  },
  jest: {
    name: 'Jest',
    svg: '/techstack/jest.svg',
    classname: '',
  },
  postgresql: {
    name: 'PostgreSQL',
    svg: '/techstack/postgresql.svg',
    classname: '',
  },
};

const others = {
  git: {
    name: 'Git',
    svg: '/techstack/git.svg',
    classname: '',
  },
  figma: {
    name: 'Figma',
    svg: '/techstack/figma.svg',
    classname: '',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    svg: '/techstack/tailwindcss.svg',
    classname: '',
  },
  postman: {
    name: 'Postman',
    svg: '/techstack/postman.svg',
    classname: '',
  },
  materialui: {
    name: 'Material UI',
    svg: '/techstack/material-ui.svg',
    classname: '',
  },
};

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`transition-opacity duration-1000 ease-in ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Languages</h1>
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
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Frameworks</h1>
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
      <h1 className="text-2xl font-semibold tracking-tight mb-1">Others</h1>
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
