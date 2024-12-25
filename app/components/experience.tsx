'use client';

import { Fade, Modal } from '@mui/material';
import { ArrowIcon } from 'app/components/footer';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function JouzuDescription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const techstack = {
    react: {
      name: 'React',
      svg: '/portfolio-website/techstack/react.svg',
      classname: '',
    },
    typescript: {
      name: 'TypeScript',
      svg: '/portfolio-website/techstack/typescript.svg',
      classname: '',
    },
    expo: {
      name: 'Expo',
      svg: '/portfolio-website/techstack/expo.svg',
      classname: 'dark:invert',
    },
    python: {
      name: 'Python',
      svg: '/portfolio-website/techstack/python.svg',
      classname: '',
    },
    postgresql: {
      name: 'PostgreSQL',
      svg: '/portfolio-website/techstack/postgresql.svg',
      classname: '',
    },
    django: {
      name: 'Django',
      svg: '/portfolio-website/techstack/django.svg',
      classname: '',
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Text Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Jouzu
        </h2>
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
          CP2106 Orbital
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          May 2024 - August 2024
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Developed a native application that helps users to learn Japanese
          vocabulary and Kanji. Jouzu has a messaging feature that allows users
          to connect with friends and practice Japanese. Japanese vocabulary can
          be added to a flashcard system and users can use the spaced repetition
          algorithm to help them remember the vocabulary.
        </p>
        <a
          className="w-fit flex items-center transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 mb-6"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/Jouzu-AI"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">view source</p>
        </a>
        <div className="flex flex-wrap gap-4">
          {Object.entries(techstack).map(
            ([language, { name, svg, classname }]) => (
              <Image
                key={language}
                src={svg}
                alt={name}
                width={40}
                height={40}
                className={`hover:scale-110 transition-transform ` + classname}
              />
            )
          )}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">
        <Image
          src={'/portfolio-website/images/jouzu.png'}
          alt="Jouzu"
          width={500}
          height={500}
          className="rounded-lg shadow-lg hover:-translate-y-2 transition-transform"
          onClick={handleOpen}
        />
        <Modal
          aria-labelledby="transition-full-jouzu-poster"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-200 p-4">
              <div className="h-[48rem] max-h-max overflow-y-auto">
                <Image
                  id="transition-full-jouzu-poster"
                  src={'/portfolio-website/images/jouzu.png'}
                  alt="Jouzu"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

function ContactMateDescription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Text Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          ContactMate
        </h2>
        <h3 className="text-lg font-medium text-gray-600 dark:text-gray-300">
          CS2103T Software Engineering
        </h3>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          August 2024 - November 2024
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Developed a desktop application for managing clients at Active Ageing
          Centres. It is a contact book for managing contacts, optimised for use
          via a Command Line interface while providing the benefits of a
          Graphical User Interface.
        </p>
        <a
          className="w-fit flex items-center transition-all text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 mb-6"
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/AY2425S1-CS2103T-F14b-3/tp"
        >
          <ArrowIcon />
          <p className="ml-2 h-7">view source</p>
        </a>
        <div className="flex flex-wrap gap-4">
          <Image
            src={'/portfolio-website/techstack/java.svg'}
            alt="Java"
            width={40}
            height={40}
            className="hover:scale-110 transition-transform"
          />
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">
        <Image
          src={'/portfolio-website/images/contactmate.png'}
          alt="Jouzu"
          width={500}
          height={500}
          className="rounded-lg shadow-lg hover:-translate-y-2 transition-transform"
          onClick={handleOpen}
        />
        <Modal
          aria-labelledby="transition-full-jouzu-poster"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-200 p-4">
              <div className="max-h-full overflow-y-auto">
                <Image
                  id="transition-full-jouzu-poster"
                  src={'/portfolio-website/images/contactmate.png'}
                  alt="Jouzu"
                  width={1000}
                  height={1000}
                  className="object-contain"
                />
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}

/**
 * Each experience item should follow this format:
 * title
 * duration
 * picture
 * description
 *
 * @returns JSX.Element
 */
export default function ExperienceList() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      <h1 className="text-2xl font-bold tracking-tight mb-8 text-gray-800 dark:text-gray-200">
        Experiences
      </h1>
      <div className="flex flex-col gap-6">
        <JouzuDescription />
        <ContactMateDescription />
      </div>
    </div>
  );
}
