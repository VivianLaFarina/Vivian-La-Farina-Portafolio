import React from 'react';
const Navbar1 = () => {
    return (


        <nav className=' grid grid-row-s py-24  md:py-36 md:py-18 md:space-y-0 md:grid md:grid-cols-2  gap-6 md:gap-40 text-slate-600' >

            <button className=' text-xl md:text-3xl flex justify-center  gap-2 '> <i className='bx bxs-right-arrow text-xl'></i>
                <a href="/projects">see my projects</a>
            </button>

            <button className=' text-xl  md:text-3xl   flex justify-start gap-2 '><i className='bx bxs-right-arrow text-xl'></i>
                <a href="/about"> more  about me</a>
            </button>


        </nav>

    )
}

export default Navbar1





