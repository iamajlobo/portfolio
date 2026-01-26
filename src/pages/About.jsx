import AboutBody from '../components/AboutBody';
import Footer from '../components/Footer';


const About = () => {
    return (
        <section>
            <div className="text-center max-w-6xl mx-auto py-15 border-b-2 border-gray-200 mb-10">
                <h2 className="text-xl md:text-3xl font-bold text-blue-600">About Me</h2>
                <p className="text-sm mt-2 px-5 md:px-50 text-gray-800">
                    I’m a Computer Science student driven by curiosity and 
                    continuous learning. Every experience helps me develop 
                    better skills and a stronger mindset.
                </p>
            </div>
            <div className='max-w-6xl mx-auto '>
                <AboutBody/>
            </div>
            <Footer/>
        </section>
    );
}

export default About;