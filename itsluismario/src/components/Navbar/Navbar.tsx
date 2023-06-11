import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-col  z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static">
        Hi,&nbsp;
        <code className="font-mono font-bold">It's luismario</code>
        </p>
    </div>
  )
}

export default Navbar