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
            <main className='text-slate-600 px-6 py-8 md:px-6 md:py-4 flex flex-col items-center justify-center'>
                <article className='space-y-4 text-center font-medium'>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-extrabold'>
                        Hey, I'm
                        <p className='text-4xl md:text-4xl lg:text-6xl py-4'>Vivian La Farina</p>
                    </h2>
                    <p className=' text-xl md:text-xl lg:text-xl  '>
                        I am a Web project Developer, specialized in E-businesses
                    </p>
                </article>
                <Navbar1 />
            </main>
        </section>
    );
};

export default Home;
