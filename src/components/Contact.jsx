import React from 'react';
import seperator from "../assets/separatorBlack.png";
import FormToGmail from './portal/FormToGmail';




const Contact = () => {
  return (
    <div>
      <div className="me text-black">
        <h2 className="md:text-[1.5rem] py-3 px-5 border-3 border-black  mb-5 w-50 mx-auto mt-25 uppercase font-bold">
          Contact
        </h2>
        <p className="text-base md:w-200 w-full mx-auto mt-10  px-5 md:px-0 md:text-pretty text-balance">
          Let’s create something great together. Send a message anytime and I’ll
          get back to you as soon as possible.
        </p>
      </div>

      <img src={seperator} className="mx-auto mt-10" alt="" />

      <div className="contact">
        <FormToGmail />
      </div>
    </div>
  );
}

export default Contact
