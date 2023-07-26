import React from 'react';
import Header from '../components/Header';
import Navbar1 from '../components/Navbar1';

const Home = () => {


    return (
        <section className='min-h-screen'>
            {/* Portafolio Vivian La Farina */}
            {/* Header */}
            <Header />

            {/* Introduction section */}
            <main className='text-slate-600 px-6 md:px-6 md:py-4  lg:py-0 flex flex-col items-center justify-center'>
                <article className='space-y-2 text-center font-medium'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h2 className='text-xl md:text-3xl lg:text-4xl font-extrabold'>
                        Hey, I'm
                        <p className='text-3xl md:text-4xl  lg:text-6xl py-2  lg:py-4 transition duration-600 transform hover:scale-x-125 hover:scale-y-110 duration-600  '> Vivian La Farina</p>
                    </h2>
                    <p className=' text-md md:text-xl lg:text-2xl  lg:py-0 '>
                        I am a Web project Developer, specialized in E-businesses
                    </p>
                </article>
                <Navbar1 />
            </main>
        </section>
    );
};

export default Home;
