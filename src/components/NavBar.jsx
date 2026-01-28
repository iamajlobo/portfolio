import { Link, NavLink } from 'react-router';
import { useState } from 'react';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `mx-2 mt-5 md:mt-0 transition ${
            isActive
                ? 'text-black md:border-b-2 border-blue-600'
                : 'text-gray-600'
        }`;

    return (
        <nav className='bg-white py-3 md:py-4 px-5 md:px-15 border-b-2 border-gray-200 flex justify-between uppercase items-center sticky top-0 z-50'>
            <Link to='/' className='font-bold mx-2 text-lg'>
                <span className='text-blue-600'>AJ</span>LOBO
            </Link>

            <svg
                className='md:hidden w-8 inline-block'
                onClick={() => setIsOpen(true)}
                viewBox="0 0 24 24"
                fill="none"
            >
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000" strokeWidth="2" />
            </svg>

            <ul
                className={`bg-white text-sm font-semibold 
                ${isOpen ? 'flex' : 'hidden'} 
                md:flex flex-col md:flex-row 
                absolute md:relative top-0 right-0 
                h-screen md:h-auto w-full md:w-auto 
                p-10 md:p-0 text-center`}
            >
                <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
                    Home
                </NavLink>

                <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
                    About
                </NavLink>

                <NavLink to="/projects" className={linkClass} onClick={() => setIsOpen(false)}>
                    Activities
                </NavLink>

                <svg
                    className='md:hidden w-5 absolute top-5 left-5'
                    onClick={() => setIsOpen(false)}
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path d="M18 18L6 6M6 18L18 6" stroke="#000" strokeWidth="2" />
                </svg>
            </ul>
        </nav>
    );
};

export default NavBar;
