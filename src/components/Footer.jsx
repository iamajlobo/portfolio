import github from '../assets/github.svg';
import gmail from '../assets/gmail.svg';
import linkedin from '../assets/linkedin.svg';

const Footer = () => {
    return (
        <footer className="py-10 text-center mt-10 border-t-2 border-gray-100">
            <div className='flex justify-center gap-5 items-center mb-2'>
                <a href="https://github.com/iamajlobo" target='_blank'><img className='transform hover:scale-120 w-7 mr-1' src={github} alt="Github Logo" /></a>
                <a href="mailto:aj.lobo.2004@gmail.com" target='_blank'><img className='transform hover:scale-120 w-7' src={gmail} alt="GMail Logo" /></a>
                <a href="https://www.linkedin.com/in/aj-lobo-9a16773a8/" target='_blank'><img className='transform hover:scale-120 w-9' src={linkedin} alt="LinkedIn Logo" /></a>
            </div>
            <h4 className="text-sm ">AJLOBO | All rights reserved 2026</h4>
        </footer>
    );
}

export default Footer;