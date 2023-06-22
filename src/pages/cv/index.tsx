import React from 'react';
import Link from 'next/link';

const CV = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className='text-left max-w-screen-sm group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30'>
        <Link href="https://sapphire-beatriz-43.tiiny.site" legacyBehavior>
          <a>Open CV</a>
        </Link>
      </div>
    </main>
  );
};

export default CV;
