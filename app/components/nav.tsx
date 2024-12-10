'use client';

import Link from 'next/link';
import Image from 'next/image';

const navItems = {
  '/': {
    name: 'home',
  },
  '/blog': {
    name: 'blog',
  },
  '/gallery': {
    name: 'gallery',
  },
};

const socials = {
  github: {
    name: 'github',
    url: 'github.com/brendanng7',
    svg: '/socials/github.svg',
  },
  linkedin: {
    name: 'linkedin',
    url: 'linkedin.com/in/brendanng7',
    svg: '/socials/linkedin.svg',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(socials).map(([social, { name, url, svg }]) => {
              return (
                <>
                  <a
                    key={social}
                    href={`https://${url}`}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 m-1"
                  >
                    <Image
                      src={svg}
                      alt={name}
                      width={30}
                      height={30}
                      className=""
                    />
                  </a>
                </>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
