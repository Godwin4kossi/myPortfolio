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

        <div className="flex flex-wrap gap-x-50 gap-y-20 md:w-3/5 w-full px-5 md:px-0 mx-auto justify-center">
          <div className="design w-[450px] text-left">
            <div className="flex items-center">
              <img src={tools1} alt="tools" />
              <span className="text-xl text-black font-bold">DESIGN</span>
            </div>
            <p className="text-base text-gray-500 pl-15 pt-5">
              From idea to layout, I design websites that reflect your vision.
              Whether you have a concept or need one developed, I’ll collaborate
              with you to bring it to life.
            </p>
          </div>
          <div className="design w-[450px]  text-left">
            <div className="flex items-center">
              <img src={tools2} alt="tools" />
              <span className="text-xl text-black font-bold">DEVELOPMENT</span>
            </div>
            <p className="text-base text-gray-500 pl-17 pt-5">
              I build fast, responsive, and user-friendly websites and
              applications using modern development tools and best practices.
              Whether it’s a simple site or a more complex system with
              integrations and dynamic features, I ensure clean code, smooth
              performance, and scalability.
            </p>
          </div>
          <div className="design w-[450px]  text-left">
            <div className="flex items-center">
              <img src={tools3} alt="tools" />
              <span className="text-xl text-black font-bold">MAINTENANCE</span>
            </div>
            <p className="text-base text-gray-500 pl-20 pt-5">
              Your website shouldn’t be left unattended after launch. I provide
              ongoing maintenance, updates, bug fixes, performance improvements,
              and feature upgrades to keep your site secure, functional, and
              running at its best.
            </p>
          </div>
        </div>

        <img src={seperator} className="mx-auto mt-30" alt="" />
      </div>
    </div>
  );
}

export default Explore
