import React from 'react';
// import avatarImg from "../../assets/7358602-removebg-preview (1).png";
import avatarImg from "../../assets/my pic.png";
import './Home.css';


// import avatarImg from "../../assets/myavg.webp";

import TextChange from '../TextChange';

const Home = () => {
    return (
        <div className=' text-white flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w-2/3 md:pt-10'>
                <h1 className='text-3xl md:text-6xl  font-bold flex leading-normal tracking-tighter'>
                    {/* Hello ' I  am  SANJANA <br />
                    a Full Stack Developer */}
   <TextChange />


                </h1>
                <p className='text-sm md:text-2xl tracking-tight '>
                A full-stack developer with expertise in a modern technology stack including React, Node.js, MongoDB,
                 and proficient in building scalable web applications from front-end design to back-end logic.
                    

                </p>
                <button className='mt-5 md:md-10 text-black py02 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 
                duration-200 hover:scale-105 font-semibold rounded-3xl bg-[#0ff] '>
                    Contact Me
                    


                </button>

            </div>
            <div><img     src={avatarImg}  alt=' ' className='profile-image'/></div>

        </div>
    )
}

export default Home;