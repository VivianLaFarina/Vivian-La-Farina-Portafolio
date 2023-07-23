import React from 'react';
import { Link } from 'react-router-dom';
const Navbar1 = () => {
    return (


        <nav className=' grid grid-row-s py-20  md:py-30 md:py-18 md:space-y-0 md:grid md:grid-cols-2   md:gap-40 text-slate-600 transform ' >

            <Link to="/projects" className='  text-xl md:text-2xl flex space-x-10 '>

                <i className=' transform absolute hover:translate-x-full transition duration-1000  bx bxs-right-arrow text-xl  '></i>
                <h2 className='transform hover:underline'>projects</h2>

            </Link >


            <Link to="/about" className='  text-xl md:text-2xl flex space-x-10 '>

                <i className=' transform absolute  hover:translate-x-full transition duration-1000 bx bxs-right-arrow text-xl  '></i>
                <h2 className=' transform hover:underline duration-1000 '>about me</h2>
            </Link>



        </nav>

    )
}

export default Navbar1





