import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';
import Navbar from '@src/components/Navbar/Navbar';

const HomePage = () => {
  return (
    <Layout>

    

      <main className="flex flex-col items-center justify-center ">  
      <Navbar/>
        <div className="flex flex-col items-center justify-center  h-[90vh] overflow-auto">
          <div className="grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
            <Link legacyBehavior href="/about">
              <a className="group rounded-lg border border-transparent px-5 py-4 mb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30" target="_blank" rel="noopener noreferrer">
                <h2 className="mb-3 text-2xl font-semibold">
                  About me{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">What is my goal in the next 10 years?</p>
              </a>
            </Link>

            <Link legacyBehavior href="/startup">
              <a className="group rounded-lg border border-transparent px-5 py-4 mb-20 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30" target="_blank">
                <h2 className="mb-3 text-2xl font-semibold">
                  Startup{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                  </span>
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">Trying to build the future</p>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default HomePage;
