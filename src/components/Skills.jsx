import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css3.png'
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import wordpress from "../assets/wordpress.png";
import tailwind from "../assets/tailwind.png";
import typescript from "../assets/typescript.png";
import bootstrap from "../assets/bootstrap.png";
import git from "../assets/git.png";
import next from "../assets/next.png";

const Skills = () => {
  return (
    <div className="w-3/5 skills text-black  mx-auto">
      <h2 className="md:text-[1.5rem] py-3 px-5 border-3 border-black mb-5 w-60 mx-auto mt-25 uppercase font-bold">
        Skills
      </h2>
      <h2 className="md:text-[1.5rem] py-3 mb-5  mt-25 uppercase font-bold text-left">
        Using Now :
      </h2>

      <div className="flex flex-wrap justify-start md:gap-40 gap-10">
        <div className="skill-box">
          <img src={html} alt="" />
          <p className="mt-4">HTML5</p>
        </div>
        <div className="skill-box">
          <img src={css} alt="" />
          <p className="mt-4">CSS3</p>
        </div>
        <div className="skill-box">
          <img src={javascript} alt="" />
          <p className="mt-4 uppercase">javascript</p>
        </div>
        <div className="skill-box">
          <img src={react} alt="" />
          <p className="mt-4 uppercase">react</p>
        </div>
        <div className="skill-box">
          <img src={bootstrap} alt="" />
          <p className="mt-4 uppercase">bootstrap</p>
        </div>
      </div>
      <div className="flex flex-start items-end flex-wrap justify-start md:gap-40 gap-10 mt-20">
        <div className="skill-box">
          <img src={wordpress} className="mx-auto" alt="" />
          <p className="mt-4 uppercase">wordpress</p>
        </div>
        <div className="skill-box">
          <img src={tailwind} className="w-[90px] h-[100px]" alt="" />
          <p className="mt-4 uppercase">tailwind</p>
        </div>
        <div className="skill-box">
          <img src={typescript} alt="" className="w-[90px] h-[100px]" />
          <p className="mt-4 uppercase">typescript</p>
        </div>
      </div>

      <h2 className="md:text-[1.5rem] py-3 mb-5  mt-25 uppercase font-bold text-left">
        Learning :
      </h2>
      <div className="flex flex-start flex-wrap justify-start md:gap-40 gap-10 mt-20">
        <div className="skill-box">
          <img src={git} className="mx-auto" alt="" />
          <p className="mt-4 uppercase">git</p>
        </div>
        {/* <div className="skill-box">
          <img src={next} className="w-[90px] h-[100px]" alt="" />
          <p className="mt-4 uppercase">next</p>
        </div> */}
        <div className="skill-box">
          <img src={typescript} alt="" />
          <p className="mt-4 uppercase">typescript</p>
        </div>
        <div className="skill-box">
          <img src={next} alt="" className="w-[100px] h-[100px]" />
          <p className="mt-4 uppercase">Next jS</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
