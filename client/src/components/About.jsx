import React from "react";
import { FaUserCheck } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { BiMailSend } from "react-icons/bi";
import { GrContact } from "react-icons/gr";
import { IoIosArrowRoundDown } from "react-icons/io";

const About = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          How does it work?
        </h1>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-bold m-10">
          Want to find babysitters?
        </h2>
      </div>
      <div className="container bg-gray-100 mx-auto mt-8 p-4 sm:p-8 lg:p-12 rounded shadow flex flex-col sm:flex-row items-center justify-center">
        <div className="mr-8">
          <ul className="list-none p-0">
            <li className="mb-4 flex items-center">
              <div className="rounded-full bg-pink-500 p-4">
                <FaUserCheck size={46} className="text-white" />
              </div>
              <span className="text-3xl font-bold ml-6 text-gray-500">1</span>
              <p className="text-xl ml-4">
                Register easily and publish your ad
              </p>
            </li>
            <li className="mb-4 flex items-center">
              <IoIosArrowRoundDown size={20} className="ml-7 text-gray-400" />
            </li>
            <li className="mb-4 flex items-center">
              <div className="rounded-full bg-pink-500 p-4">
                <IoIosSearch size={46} className="text-white" />
              </div>
              <span className="text-3xl font-bold ml-6 text-gray-500">2</span>
              <p className="text-xl ml-4">
                Utilize our advanced search system to find babysitters
              </p>
            </li>
            <li className="mb-4 flex items-center">
              <IoIosArrowRoundDown size={20} className="ml-7 text-gray-400" />
            </li>
            <li className="mb-4 flex items-center">
              <div className="rounded-full bg-pink-500 p-4">
                <BiMailSend size={46} className="text-white" />
              </div>
              <span className="text-3xl font-bold ml-6 text-gray-500">3</span>
              <p className="text-xl ml-4">
                Send your job description with a click and receive responses.
                Also, manage job applications
              </p>
            </li>
            <li className="mb-4 flex items-center">
              <IoIosArrowRoundDown size={20} className="ml-7 text-gray-400" />
            </li>
            <li className="flex items-center">
              <div className="rounded-full bg-pink-500 p-4">
                <GrContact size={46} className="text-white" />
              </div>
              <span className="text-3xl font-bold ml-6 text-gray-500">4</span>
              <p className="text-xl ml-4">
                Contact potential babysitters via phone or email
              </p>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
