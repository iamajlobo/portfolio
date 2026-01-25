import { Link } from "react-router";
import ProjectCard from "./ProjectCard";
import { useState,useEffect } from "react";

const ProjectIntro = () => {
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
        <section className="max-w-6xl mx-auto py-10 md:py-15 px-5 md:px-15 text-center animated-elements">
            <h2 className="text-xl md:text-4xl font-bold mb-5">My Projects</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10">
                {projects.slice(0,4).map((projects)=>(<ProjectCard key={projects.id} project={projects}/>))}
            </div>
            <Link className="text-sm md:text-md bg-white py-2 px-4 text-blue-600 rounded-sm border-2 
                            border-blue-600 hover:bg-blue-600 hover:text-white transition ease-in-out 
                            duration-300" to="/projects">
                View more.
            </Link>
        </section>
    );
}

export default ProjectIntro;