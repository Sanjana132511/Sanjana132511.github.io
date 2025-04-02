
import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About Me</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                Front-end web development is the development of the graphical user interface of a
                 website through the use of HTML,CSS, REACT,MATERIAL-UI,BOOTSTRAP 
                 and JavaScript so users can view and interact with that website.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                database management system (DBMS) focus on designing, implementing, and maintaining databases to ensure data integrity 
                and accessibility Optimized complex database queries, resulting in a 30% reduction in query execution time by implementing 
                efficient indexing strategies and query optimization techniques. through the use of MongoDB(NOSQL) and MySQL
       
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                    Back-end Development  Architected and implemented high-performance, scalable backend systems utilizing 
                    [specific technologies like Node.js or Python, ] and Jquery, EXpressjs, AJAX to deliver robust and efficient solutions,
                     significantly improving application responsiveness and data processing speeds.
              
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
