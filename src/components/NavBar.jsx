import {Link} from 'react-router';
import menu from '../assets/menu.svg';
import close from '../assets/close-menu.svg';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [active, setActive] = useState('home');

    const handleLinks = (path) => {
        setActive(path);
        setIsOpen(false);
    }

    return (
        <nav className='bg-white py-4 px-5 border-b-2 border-gray-200 flex justify-between uppercase items-center sticky top-0'>
            <Link to='/' className='font-bold mx-2 text-lg'><span className='text-blue-600'>AJ</span>LOBO</Link>
            <img className='md:hidden w-8 inline-block' onClick={()=>setIsOpen(true)} src={menu} alt="Menu Icon"/>
            <ul className={`bg-white text-sm 
                            font-semibold text-gray-600 
                            ${(isOpen)?'flex':'hidden'} 
                            md:flex
                            flex-col md:flex-row md:relative 
                            absolute top-0 right-0 md:h-auto 
                            h-screen md:w-auto w-full p-10 md:p-0 text-center
                            transition ease-linear duration-1000`}>
                <Link to='/' className={`${(active==='home'?'md:border-b-2 border-blue-600':'')} mx-2 mt-5 md:mt-0`} onClick={()=>handleLinks('home')}>Home</Link>
                <Link to='/about' className={`${(active==='about'?'md:border-b-2 border-blue-600':'')} mx-2 mt-2 md:mt-0`} onClick={()=>handleLinks('about')}>About</Link>
                <Link to='/projects' className={`${(active==='projects'?'md:border-b-2 border-blue-600':'')} mx-2 mt-2 md:mt-0`} onClick={()=>handleLinks('projects')}>Projects</Link>
                <img className='md:hidden w-6 absolute top-5 left-5' onClick={()=>setIsOpen(false)} src={close} alt="Close Icon" />
            </ul>
        </nav>
    );
}

export default NavBar;