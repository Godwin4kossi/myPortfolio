import React from 'react'
import aboutBg from "../assets/aboutBg.png";


const About = () => {
  return (
    <div className="w-full inset-0 bg-[#1D1D1D]">
      <div className="w-full flex  justify-between pl-20 ">
        <div className="about w-3/5 text-left py-10">
          <h5 className="text-base text-white mb-5  w-3/5">IT BERRIES</h5>
          <p className="text-base w-3/5 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
            beatae odio aliquid animi laboriosam, perferendis atque vel pariatur
            eligendi, possimus quae iste ipsum dolore quasi voluptate sapiente
            omnis dolorem? Perspiciatis facilis eum cupiditate quas vel modi
            totam voluptatum consequuntur, necessitatibus error incidunt tempore
            illum cumque reprehenderit harum pariatur beatae quae.d
          </p>
        </div>
        <div
          className="relative h-60 w-2/5  bg-no-repeat bg-center bg-auto bg-transparent p-5"
          style={{ backgroundImage: `url(${aboutBg})` }}
        ></div>
      </div>
    </div>
  );
}

export default About
