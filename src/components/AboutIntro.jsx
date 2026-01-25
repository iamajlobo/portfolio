import { Link } from "react-router";

const AboutIntro = () => {
    return (
        <section className="py-5 md:py-15 px-5 md:px-20 bg-blue-50 shadow-sm">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-xl md:text-4xl font-bold mb-5">About Me</h2>
                <p className="text-sm md:text-base lg:px-40 mb-5">
                    I’m a Computer Science student with a curiosity for learning 
                    and solving problems. I enjoy taking on new challenges that 
                    push me to grow. Exploring ideas and turning them into real 
                    results excites me. I value continuous improvement and discovering 
                    new skills along the way. Every experience I gain helps me become a 
                    better student and professional. I am always motivated to take initiative 
                    and make a positive impact in everything I do.
                </p>
                <Link className="text-sm md:text-md bg-blue-600 py-2 px-4 text-white rounded-sm border-2 
                                border-blue-600 hover:bg-white hover:text-blue-600 transition ease-in-out duration-300" to="/about">
                    Read more.
                </Link>
            </div>
        </section>
    );
}

export default AboutIntro;