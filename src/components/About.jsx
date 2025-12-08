import React from 'react'
import aboutBg from "../assets/aboutBg.png";


const About = () => {
  return (
    <div className="w-full inset-0 bg-[#1D1D1D]">
      <div className="w-full flex  justify-between md:pl-20 px-10">
        <div className="about md:w-3/5 w-full text-left py-10">
          <h5 className="text-base text-white mb-5  md:w-3/5 w-full uppercase">
            Purposeful Code
          </h5>
          <p className="text-base md:w-3/5 w-full text-white">
            I believe great software begins with empathy — understanding the
            user and building solutions that truly support them. Every line of
            code is written with purpose, clarity, and long-term value in mind.
          </p>
        </div>
        <div
          className="relative h-60 w-2/5  bg-no-repeat bg-center bg-auto bg-transparent p-5 hidden md:block"
          style={{ backgroundImage: `url(${aboutBg})` }}
        ></div>
      </div>
    </div>
  );
}

export default About
