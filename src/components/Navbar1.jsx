import React from 'react';
const Navbar1 = () => {
    return (


        <nav className=' grid grid-row-s py-20  md:py-30 md:py-18 md:space-y-0 md:grid md:grid-cols-2   md:gap-40 text-slate-600 transform ' >

            <button className='  text-xl md:text-2xl flex justify-center gap-10 '>
                <section>
                    <i className=' transform absolute hover:translate-x-full transition duration-1000  bx bxs-right-arrow text-xl  '></i>
                </section>
                <section>
                    <a href="/projects">projects</a>
                </section>
            </button >


            <button className='  text-xl md:text-2xl flex justify-center gap-10 '>
                <section>
                    <i className=' transform absolute hover:translate-x-full transition duration-1000 bx bxs-right-arrow text-xl  '></i>

                </section>
                <section>
                    <a href="/about">about me</a>
                </section>
            </button>



        </nav>

    )
}

export default Navbar1





