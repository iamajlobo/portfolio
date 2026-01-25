import ProjectCard from "../components/ProjectCard";
import Footer from '../components/Footer';
import { useEffect, useState } from "react";

const Project = () => {
   const [projects, setProjects] = useState([]);

   const getProjects = async () => {
      const response = await fetch('/projects.json');
      const data = await response.json();
      setProjects(data);
   }

   useEffect(()=>{
      getProjects();
   },[]);

   return (
      <section>
         <div className="text-center max-w-6xl mx-auto py-15 border-b-2 border-gray-200 mb-10">
            <h2 className="text-xl md:text-3xl font-bold">My Projects</h2>
            <p className="text-sm mt-2 px-5 md:px-50 text-gray-800">
               This section showcases the projects I’ve worked 
               on as part of my learning and growth. Each project 
               reflects my effort, creativity, and problem-solving 
               skills developed through hands-on experience.
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