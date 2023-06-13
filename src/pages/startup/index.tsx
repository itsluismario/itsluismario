import React from 'react'
import Navbar from '@src/components/Navbar/Navbar'
import StartpContent from '@src/components/Startup'

const Startup = () => {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center  h-[90vh] overflow-auto">
        <StartpContent/>
      </div>
    </main> 
  )
}

export default Startup