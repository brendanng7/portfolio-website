'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/gallery': { name: 'gallery' },
};

const socials = {
  github: {
    name: 'github',
    url: 'github.com/brendanng7',
    svg: '/portfolio-website/socials/github.svg',
  },
  linkedin: {
    name: 'linkedin',
    url: 'linkedin.com/in/brendanng7',
    svg: '/portfolio-website/socials/linkedin.svg',
  },
};

export function Navbar() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      // Update state with minimal logic for performance
      setTop(window.scrollY <= 30);
    };

    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <aside
      className={`-ml-[8px] mb-16 tracking-tight z-50 lg:sticky lg:top-0 w-full bg-white dark:bg-black transition-shadow duration-300 ${
        !top && 'shadow-lg'
      }`}
    >
      <div className="lg:w-4xl md:w-3xl mx-auto flex justify-between items-center py-4">
        {/* Left Links */}
        <div className="flex space-x-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right Socials */}
        <div className="flex space-x-4 items-center">
          {Object.entries(socials).map(([social, { name, url, svg }]) => (
            <a
              key={social}
              href={`https://${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all group"
            >
              <Image
                src={svg}
                alt={name}
                width={30}
                height={30}
                className="group-hover:-translate-y-1 transition-transform dark:invert"
              />
            </a>
          ))}
          <a
            href="/portfolio-website/resume/resume.pdf"
            download
            className="transition-all group"
          >
            <Image
              src="/portfolio-website/resume/download-resume.svg"
              alt="resume"
              width={30}
              height={30}
              className="group-hover:-translate-y-1 transition-transform dark:invert"
            />
          </a>
        </div>
      </div>
    </aside>
  );
}
