import React from 'react'
import seperator from "../assets/separatorBlack.png"
import tools1 from "../assets/tools1.png"
import tools2 from "../assets/tools2.png"
import tools3 from "../assets/tools3.png"

const Explore = () => {
  return (
    <div className="w-full mx-auto mt-30">
      <div>
        <img src={seperator} className="mx-auto mb-30" alt="" />

        <div className="flex flex-wrap gap-x-50 gap-y-20 w-3/5 mx-auto justify-center">
          <div className="design w-[450px] text-left">
            <div className="flex items-center">
              <img src={tools1} alt="tools" />
              <span className="text-xl text-black font-bold">DESIGN</span>
            </div>
            <p className="text-base text-gray-500 pl-15 pt-5">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="design w-[450px]  text-left">
            <div className="flex items-center">
              <img src={tools2} alt="tools" />
              <span className="text-xl text-black font-bold">DEVELOPMENT</span>
            </div>
            <p className="text-base text-gray-500 pl-17 pt-5">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
          <div className="design w-[450px]  text-left">
            <div className="flex items-center">
              <img src={tools3} alt="tools" />
              <span className="text-xl text-black font-bold">MAINTENANCE</span>
            </div>
            <p className="text-base text-gray-500 pl-20 pt-5">
              I can design the site based on your needs and suggestions. I can
              also design the site from scratch and consult you during the job.
            </p>
          </div>
        </div>

        <img src={seperator} className="mx-auto mt-30" alt="" />
      </div>
    </div>
  );
}

export default Explore
