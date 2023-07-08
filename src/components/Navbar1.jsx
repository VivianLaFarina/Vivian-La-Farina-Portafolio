import React from 'react';
const Navbar1 = () => {
    return (


        <nav className=' grid grid-row-s  py-10  md:py-16 md:space-y-0 md:grid md:grid-cols-2 space-x-12 gap-3 text-slate-600' >

            <button className=' text-xl flex justify-center  gap-2 '> <i className='bx bxs-right-arrow text-xl'></i>
                <a href="/projects">see my projects</a>
            </button>

            <button className=' text-xl    flex justify-start gap-2'><i className='bx bxs-right-arrow text-xl'></i>
                <a href="/about"> more  about me</a>
            </button>


        </nav>

    )
}

export default Navbar1





