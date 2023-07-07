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
            <main className='text-slate-600 px-6 py-8 md:px-10 md:py-12 flex flex-col items-center justify-center'>
                <article className='space-y-4 text-center font-medium'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h2 className='text-4xl md:text-5xl lg:text-6xl font-extrabold'>
                        Hey, I'm
                        <p className='text-5xl md:text-6xl lg:text-8xl py-7'>Vivian La Farina</p>
                    </h2>
                    <p className='text-lg md:text-xl lg:text-2xl py-6 '>
                        I am a Web project Developer
                    </p>
                </article>
                <Navbar1 />
            </main>
        </section>
    );
};

export default Home;
