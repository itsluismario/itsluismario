import React from 'react'
import Navbar from '@src/components/Navbar/Navbar'
import PhilosophyContent from '@src/components/Philosophy'

const Philosophy = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center  h-[90vh] overflow-auto">
        <PhilosophyContent/>
      </div>
    </main>
  )
}

export default Philosophy