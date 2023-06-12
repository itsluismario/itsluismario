import React from 'react';
import data from '@src/data/projectsData';

const Projects = () => {
  return (
    <div className='mt-10 flex flex-col '>
      {
        data?.map((item, index) =>
          <section key={index} className="text-left max-w-screen-sm group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30">
            <h2 className="mb-3 text-2xl font-semibold">
              {item.name}
            </h2>
            <p className="text-sm opacity-90">
              Description: {item.description}
            </p>
            <section className='flex flex-row space-x-4'>
              <p className="text-sm opacity-90">Stack:</p>
              {item.stack.map((technology, index) => (
                <ul className="text-sm opacity-90" key={index}>{technology}</ul>
              ))}
            </section>

            <div className='flex flex-row space-x-4'>
              {item.link.length !== 9 ? (
                <p className="text-sm opacity-90 ">
                  <a href={item.link} key={item.link} className="text-blue-600 visited:text-blue-600">
                    View
                  </a>
                </p>
              ) : null}

              <p className="text-sm opacity-90 ">
                <a href={item.repo} key={item.repo} className="text-blue-600 visited:text-blue-600">
                  Repo
                </a>
              </p>
            </div>
          </section>
        )
      }
    </div>
  );
};

export default Projects;
