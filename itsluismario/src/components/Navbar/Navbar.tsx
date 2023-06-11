import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center z-10 w-full max-w-5xl text-sm lg:flex p-4 border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static">
    <div className="text-white">
      <Link legacyBehavior href="/">
        <a className="text-xl font-bold">Hi, it's luismario</a>
      </Link>
    </div>
    <div className="space-x-4">
      <Link legacyBehavior href="/about">
        <a className="text-white hover:text-gray-400">About Me</a>
      </Link>
      <Link legacyBehavior href="/startup">
        <a className="text-white hover:text-gray-400">Startups</a>
      </Link>
      <Link legacyBehavior href="/my-philosophy">
        <a className="text-white hover:text-gray-400">My Philosophy</a>
      </Link>
    </div>
  </nav>
  )
}

export default Navbar