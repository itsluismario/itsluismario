import React, { useState, useContext } from 'react';
import  { myInfoContext }  from '@src/context';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

const MobileMenu = () => {

  const context = useContext(myInfoContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        className="text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={toggleMenu}
      >
        <FiMenu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-4 bg-black shadow-lg">
          <nav className="flex flex-col border-b border-gray-300 pb-6 dark:border-neutral-800 ">
          <button
              className="text-gray-600 hover:text-gray-800 focus:outline-none flex items-center justify-end py-4 px-4 mx-4"
              onClick={toggleMenu}
            >
              <span className="ml-auto">
                <AiOutlineClose className="w-6 h-6" />
              </span>
            </button>
          {
            context?.branchesList?.map((branch:any) => (
              <a href={branch.url} key={branch.url} className="text-white hover:bg-white/10 py-4 px-4 mx-4 rounded">
              {branch.title}
              </a>
            ))
          }
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
