'use client';

import TypewriterComponent from 'typewriter-effect';

export default function About() {
  const aboutMe = ['am Brendan', 'study computer science', 'take photographs'];
  return (
    <>
      <h1 className="mb-8 text-3xl font-semibold tracking-tighter inline-flex">
        Hi, I&nbsp;
        <TypewriterComponent
          options={{
            strings: aboutMe,
            autoStart: true,
            loop: true,
            cursor: '_',
          }}
        />
      </h1>
      <p className="mb-4">
        {`I'm a prospective hire studying computer science in NUS. Currently a second year student planning to graduate in 2027.
        I believe that if you shoot for the stars, you will land amongst them even if you miss, so dream big! 
        I am looking for a summer internship in 2025. Let's connect!`}
      </p>
    </>
  );
}
