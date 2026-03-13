import ProjectCard from "../components/ProjectCard";
import Footer from '../components/Footer';
import { useEffect, useState } from "react";
import prac1 from "../assets/prac1.png";
import prac2 from "../assets/prac2.png";
import prac3 from "../assets/prac3.png";
import prac4 from "../assets/prac4.png";
import prac5 from "../assets/prac5.png";
import prac6 from "../assets/prac6.png";
import prac7 from "../assets/prac7.png";

import defaultImg from "../assets/placeholder.jpg";

const Project = () => {
   const [projects, setProjects] = useState([]);

   const photos = {
      "prac1.png": prac1,
      "prac2.png": prac2,
      "prac3.png": prac3,
      "prac4.png": prac4,
      "prac5.png": prac5,
      "prac6.png": prac6,
      "prac7.png": prac7
   };

   const getProjects = async () => {
      const response = await fetch('./projects.json');
      const data = await response.json();
      setProjects(data);
   }

   useEffect(()=>{
      getProjects();
   },[]);

   return (
      <section>
         <div className="max-w-6xl mx-auto text-center py-15 border-b-2 border-gray-200 mb-10">
            <h2 className="text-xl md:text-3xl font-bold text-blue-600">My Activities</h2>
            <p className="text-sm mt-2 px-5 md:px-50 text-gray-800">
               This section showcases the activities I completed as part of my 
               Data Analytics subject. Each activity reflects the analytical skills, 
               problem-solving approaches, and practical experience I developed through 
               hands-on learning.
            </p>
         </div>
         <div className="max-w-6xl mx-auto p-5 flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10">
            {projects.map((project)=>(
               <ProjectCard
                  key={project.id}
                  project={project}
                  photo={photos[project.img] || defaultImg}
               />
            ))}
         </div>
         <Footer/>
      </section>
   ); 
}

export default Project;
