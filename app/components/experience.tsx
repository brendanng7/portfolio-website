'use client';

import { Fade, Modal } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';

function JouzuDescription() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const techstack = {
    react: { name: 'React', svg: '/techstack/react.svg' },
    typescript: { name: 'TypeScript', svg: '/techstack/typescript.svg' },
    expo: { name: 'Expo', svg: '/techstack/expo.svg' },
    python: { name: 'Python', svg: '/techstack/python.svg' },
    postgresql: { name: 'PostgreSQL', svg: '/techstack/postgresql.svg' },
    django: { name: 'Django', svg: '/techstack/django.svg' },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      {/* Left Text Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">Jouzu</h2>
        <h3 className="text-lg font-medium text-gray-600">CP2106 Orbital</h3>
        <p className="text-gray-500 mb-4">May 2024 - August 2024</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Developed a native application that helps users to learn Japanese
          vocabulary and Kanji. Jouzu has a messenging feature that allows users
          to connect with friends and practice Japanese. Japanese vocabulary can
          be added to a flashcard system and users can use the spaced repetition
          algorithm to help them remember the vocabulary.
        </p>
        <div className="flex flex-wrap gap-4">
          {Object.entries(techstack).map(([language, { name, svg }]) => (
            <Image
              key={language}
              src={svg}
              alt={name}
              width={40}
              height={40}
              className="hover:scale-110 transition-transform"
            />
          ))}
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex justify-center">
        <Image
          src={'/images/jouzu.png'}
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-white border-2 border-black p-4">
              <div className="h-[48rem] overflow-y-auto">
                <Image
                  id="transition-full-jouzu-poster"
                  src={'/images/jouzu.png'}
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
        <h2 className="text-xl font-semibold text-gray-800">ContactMate</h2>
        <h3 className="text-lg font-medium text-gray-600">
          CS2103T Software Engineering
        </h3>
        <p className="text-gray-500 mb-4">August 2024 - November 2024</p>
        <p className="text-gray-700 leading-relaxed mb-6">
          Developed a desktop application for managing clients at Active Ageing
          Centres. It is a contact book for managing contacts, optimised for use
          via a Command Line interface while providing the benefits of a
          Graphical User Interface.
        </p>
        <div className="flex flex-wrap gap-4">
          <Image
            src={'/techstack/java.svg'}
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
          src={'/images/contactmate.png'}
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-4xl bg-white border-2 border-black p-4">
              <div className="h-[1000] overflow-y-auto">
                <Image
                  id="transition-full-jouzu-poster"
                  src={'/images/contactmate.png'}
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
  return (
    <section className="">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-gray-800">
        Experiences
      </h1>
      <div className="flex flex-col gap-6">
        <JouzuDescription />
        <ContactMateDescription />
      </div>
    </section>
  );
}
