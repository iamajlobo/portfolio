import { Link } from "react-router";
import ProjectCard from "./ProjectCard";

const ProjectIntro = () => {
    return (
        <section className="max-w-6xl mx-auto py-10 md:py-15 px-5 md:px-15 text-center">
            <h2 className="text-xl md:text-4xl font-bold mb-5">My Projects</h2>
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-5 mb-10">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <Link className="text-sm md:text-lg bg-white py-2 px-5 text-blue-600 rounded-sm border-2 
                                border-blue-600 hover:bg-blue-600 hover:text-white transition ease-in-out duration-300" to="/projects">Load more.</Link>
        </section>
    );
}

export default ProjectIntro;