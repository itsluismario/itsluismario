import React from 'react';
import data from '@src/data/projectsData';

const Projects = () => {
  return (
    <div className="">
      {
        data?.map((item, index) =>
          <section key={index} className="rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30 p-6">
            <h2 className="mb-3 font-semibold mt-4 text-md  leading-6
              px-2 inline-flex rounded-full bg-purple-100 text-purple-800">
              {item.name}
            </h2>
            <p className="text-ms opacity-90">
              Description: {item.description}
            </p>
            {item.milestones && (
              <p className="text-ms opacity-90 mt-2 mb-2">
                Milestones: <span className="underline text-cyan-200">{item.milestones}</span>
              </p>
            )}
            <section className='flex flex-row space-x-4'>
              <p className="text-ms opacity-90">Stack:</p>
              {item.stack.map((technology, index) => (
                <ul className="text-ms opacity-90" key={index}>{technology}</ul>
              ))}
            </section>

            <div className='flex flex-row space-x-4'>
              {item.link.length !== 9 ? (
                <p className="text-ms opacity-90 ">
                  <a href={item.link} key={item.link} className="mt-4 font-medium leading-6
                inline-flex rounded-full text-fuchsia-200 hover:underline">
                    View Project
                  </a>
                </p>
              ) : null}

              <p className="text-ms opacity-90 ">
                { item.repo
                  ? (
                    <a href={item.repo} key={item.repo} className="mt-4 font-medium leading-6
                inline-flex rounded-full text-cyan-200 hover:underline">
                    Repo
                  </a>
                  ) : null
                }
              </p>
            </div>
          </section>
        )
      }
    </div>
  );
};

export default Projects;
