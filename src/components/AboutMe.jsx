import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <div className="me text-black">
        <h2 className="md:text-[1.5rem] py-3 px-5 border-3 border-black mb-5 w-50 mx-auto mt-25 uppercase font-bold">
          About me
        </h2>
        <p className="specialWidth text-base md:w-200  w-full mx-auto mt-10 px-5 md:px-0 md:text-pretty text-balance">
          I’m a frontend developer focused on building clean, responsive, and
          user-friendly digital experiences. I work with React, TypeScript, and
          WordPress to create websites and applications that are functional,
          visually appealing, and built with the end user in mind. I enjoy
          solving problems, learning continuously, and bringing ideas to life
          through code.
        </p>
      </div>

      <div className="explore md:text-xl text-base text-black font-semibold px-5 py-3 mx-auto md:w-50 w-30  border-black border-l-2 border-r-2 my-20 ">
        Explore
      </div>
    </div>
  );
}

export default AboutMe
