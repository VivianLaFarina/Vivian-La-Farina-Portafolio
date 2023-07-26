import React from 'react';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (


        <nav className=' grid grid-row-s py-6 lg:py-8 md:py-30 md:py-18 md:space-y-0 md:grid md:grid-cols-2   md:gap-16 lg:gap-20 text-slate-600 transform gap-3' >

            <Link to="/projects" className='  text-lg md:text-xl lg:text-2xl flex space-x-10 '>

                <i className=' transform absolute hover:translate-x-full transition duration-1000  bx bxs-right-arrow text-xl lg:text-2xl '></i>
                <h2 className='transform hover:underline'>projects</h2>

            </Link >


            <Link to="/about" className='  text-lg md:text-xl lg:text-2xl flex space-x-10 '>

                <i className=' transform absolute  hover:translate-x-full transition duration-1000 bx bxs-right-arrow text-xl lg:text-2xl '></i>
                <h2 className=' transform hover:underline duration-1000 '>about me</h2>
            </Link>



        </nav>

    )
}

export default Navbar1





