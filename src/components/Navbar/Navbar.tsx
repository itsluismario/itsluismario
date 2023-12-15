import React, { useEffect, useState, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MobileMenu from '../MobileMenu/MobileMenu';
import { myInfoContext } from '@src/context';

const Navbar = () => {
  const router = useRouter();
  const currentUrl = router.asPath;
  const [isMobile, setIsMobile] = useState(false);
  const context = useContext(myInfoContext);

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };

  useEffect(() => {
    checkMobileScreen();
    window.addEventListener('resize', checkMobileScreen);
    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, []);

  const renderMenu = () => {
    if (currentUrl !== '/') {
      return (
        <div className="space-x-4 ">
          {context?.branchesList?.map((branch) => (
            <Link legacyBehavior href={branch.url} key={branch.url}>
              <a className="text-white hover:text-gray-400">{branch.title}</a>
            </Link>
          ))}
        </div>
      );
    }
  };

  return (
    <main className="sm:flex sm:flex-col sm:items-center sm:justify-center ">
    <nav className="flex justify-between items-center fixed z-10 dark:border-neutral-800 top-0 w-full max-w-5xl text-sm lg:flex border-b pl-5 sm:pl-0 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 from-inherit lg:static">
      <div className="text-white">
        <Link legacyBehavior href="/">
          <a className="text-xl font-bold">Hi, It&apos;s luismario</a>
        </Link>
      </div>
      {isMobile ? <MobileMenu /> : renderMenu()}
    </nav>
    </main>
  );
};

export default Navbar;
