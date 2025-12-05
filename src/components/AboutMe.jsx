import React from 'react'

const AboutMe = () => {
  return (
    <div>
      <div className="me text-black">
        <h2 className='text-[1.5rem] py-3 px-5 border-3 border-black mb-5 w-50 mx-auto mt-25 uppercase font-bold'>About me</h2>
        <p className="text-base md:w-200 w-full mx-auto mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut officia quasi 
            corporis soluta incidunt aliquid dolorem, ullam, dolor nesciunt optio, tenetur blanditiis ipsam cupiditate.</p>
      </div>

      <div className="explore text-xl text-black font-semibold px-5 py-3 mx-auto  w-50  border-black border-l-2 border-r-2 my-20 ">
        Explore 
      </div>
    </div>
  );
}

export default AboutMe
