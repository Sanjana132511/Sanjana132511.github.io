import  React from 'react';
import ProjectCard from './ProjectCard.jsx'
import bannerImg from "../../assets/Screenshot 2025-03-26 150333.png"

import bannerImg1 from "../../assets/Screenshot 2025-03-23 170955.png"
import bannerImg2 from "../../assets/Screenshot 2025-03-23 144151.png"




const Projects = () => {
  return (
 <div id="Projects" className=' p-10 md:p-24 text-white'>
    <h1 className="text-2xl md:text-4xl  text-white font-bold ">Projects</h1>
    <div className='py-12 px-8 flex flex-wrap gap-5'>
<ProjectCard title="Travel Website"
image = {bannerImg}  
 main="this is  Travel website created in HTML5, CSS3 and  Javascript 
fully responsive mobile and tab view Single page Application  Media Query to build Responsive User Interface" />
<ProjectCard title="NetFlix Clone  Website"
image = {bannerImg1}
 main="this is website created in BOOTSTRAP HTML5, CSS3 and Javascript 
 Single page Application  Media Query to build Responsive User Interface" />
<ProjectCard title="Hospital Website" 
image = {bannerImg2}
main="this is  Hospital website created in MERN Stack(MongoDB, Express, React, Node.js)
 fully responsive Multi-page Website Fetch data From Api user can LOGIN,REGISTER,SIGNUP,BOOK-APPOINTMENT and LOGOUT functions  " />
    </div>


 </div> 
  )
}

export default Projects;
