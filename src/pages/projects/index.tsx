import React from 'react';
import Projects from '@src/components/Projects/Projects';
import Navbar from '@src/components/Navbar/Navbar';

const MyProjects = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <Navbar/>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Projects/>
      </div>
    </main>
  );
};

export default MyProjects;