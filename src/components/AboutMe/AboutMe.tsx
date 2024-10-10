import React from 'react'

const AboutMe = () => {
  return (
    <div className="text-left max-w-screen-sm group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30">
      <h2 className="mb-3 text-2xl font-semibold">
        What am I doing with my time?
      </h2>
      {/* <p className="text-sm opacity-90">
        I&apos;m an engineer, graduated from Tecnologico de Monterrey, who had the incredible opportunity to work and learn from remarkable change-makers at Harvard: Su Ryon Shin, Phd at Shin Lab, and Banu Ahtam, Phd and Ellen Grant, MD at FNNDSC. Recognizing the privileged position I&apos;ve been in, I&apos;ve chosen to dedicate my time to creating companies that solve society&apos;s unsolved problems. My goal is to make a meaningful impact and contribute to a better world through computer science.
      </p> */}
      <p className="text-sm opacity-90">
        I&apos;m an engineer, graduated from Tecnologico de Monterrey, who had the incredible opportunity to work and learn from remarkable change-makers at Harvard: Su Ryon Shin, Phd at Shin Lab, and Banu Ahtam, Phd and Ellen Grant, MD at FNNDSC. Recognizing the privileged position I&apos;ve been in, I&apos;ve chosen to dedicate my time to creating software that solve society&apos;s unsolved problems. My goal is to make a meaningful impact and contribute to a better world through computer science.
      </p>
      <br />
      {/* <p className="text-sm opacity-90">
        However, I also understand my limitations and acknowledge that there is always room for growth. In recent months, I have focused on expanding my technical knowledge to become a well-rounded founder. I believe that continuous learning and self-improvement are essential in order to achieve greatness and drive meaningful change. By amplifying my knowledge and skills, I aim to position myself as a capable and visionary leader in the world of entrepreneurship.
      </p> */}
      <p className="text-sm opacity-90">
        In a few words, I am learning as much as I can to <label className='px-2 inline-flex rounded-full bg-purple-100 text-purple-800'>get 10,000 hours</label> learning about computing science by doing software.
      </p>
      <br />
      <p className='text-sm opacity-90 '>
        I also spend my time having fun playing the guitar and running 10km <label className='px-2 inline-flex rounded-full bg-purple-100 text-purple-800'>(my current record is 4:53/km).</label> 
      </p>
    </div>
  )
}

export default AboutMe