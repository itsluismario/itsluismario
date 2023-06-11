import React from 'react';
import AboutMe from '@src/components/AboutMe';
import Skills from '@src/components/Skills/skills';

const About = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="grid mb-32 text-center lg:mb-0 lg:grid-rows-2">
        <AboutMe/>
        <Skills/>
        </div>
      </div>
    </main>
  );
};

export default About;
