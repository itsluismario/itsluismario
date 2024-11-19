import React from 'react';
import data from '@src/data/projectsData';

const Projects = () => {
  return (
    <div className="space-y-6">
      {data?.map((item, index) => (
        <section 
          key={index} 
          className="rounded-lg border border-transparent transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30 p-4 sm:p-6"
        >
          <h2 className="mb-3 font-semibold text-sm sm:text-md leading-6 px-2 inline-flex rounded-full bg-purple-100 text-purple-800">
            {item.name}
          </h2>
          
          <p className="text-sm sm:text-base opacity-90 mt-2">
            Description: {item.description}
          </p>
          
          {item.milestones && (
            <p className="text-sm sm:text-base opacity-90 mt-2 mb-2">
              Milestones: <span className="underline text-cyan-200">{item.milestones}</span>
            </p>
          )}

          <div className='mt-4'>
            <p className="text-sm sm:text-base opacity-90 mb-2">Stack:</p>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((technology, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs sm:text-sm bg-neutral-800 rounded-full opacity-90"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div className='flex flex-wrap gap-4 mt-4'>
            {item.link.length !== 9 && (
              <a 
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-medium leading-6 text-fuchsia-200 hover:underline"
              >
                View Project
              </a>
            )}

            {item.repo && (
              <a 
                href={item.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-medium leading-6 text-cyan-200 hover:underline"
              >
                Repo
              </a>
            )}

            {item.repos && (
              <>
                <a 
                  href={item.repos.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium leading-6 text-cyan-200 hover:underline"
                >
                  Frontend Repo
                </a>
                <a 
                  href={item.repos.backend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-medium leading-6 text-cyan-200 hover:underline"
                >
                  Backend Repo
                </a>
              </>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;