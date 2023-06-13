import React from 'react';
import AboutMe from '@src/components/AboutMe/AboutMe';
import Skills from '@src/components/Skills/skills';
import Navbar from '@src/components/Navbar/Navbar';

const About = () => {
  return (
    <main className="flex flex-col items-center justify-between">
        <AboutMe/>
        <Skills/>

    </main>
  );
};

export default About;
