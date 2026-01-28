import ProjectCard from "../components/ProjectCard";
import Footer from '../components/Footer';
import { useEffect, useState } from "react";

const Project = () => {
   const [projects, setProjects] = useState([]);

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
         <div className="p-5 flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10">
            {projects.map((project)=>(<ProjectCard key={project.id} project={project}/>))}
         </div>
         <Footer/>
      </section>
   ); 
}

export default Project;