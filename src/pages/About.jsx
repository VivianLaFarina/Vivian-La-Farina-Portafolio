import React from 'react';
import Header from '../components/Header';
import CV from "../assets/CV.pdf";

const About = () => {
  return (
    <main>
      <Header />
      <section className='py-10 px-4 md:px-10 text-zinc-400 md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] max-w-[1200px] mx-auto'>
        <div className='relative'>
          <img className='w-full md:absolute rounded-3xl md:top-1/2 md:-translate-y-1/2 md:w-[130%] md:max-w-none' src="/images/img.png" alt="" />
        </div>
        <section className='px-4 py-12 bg-slate-100 md:grid md:place-content-center md:px-10 rounded-tr-3xl rounded-bl-3xl'>
          <h2 className='text-4xl md:text-5xl grid grid-rows-1 md:relative md:z-20'>
            About
          </h2>
          <p className='mt-4 text-base md:mt-6 text-slate-500 px-4 md:px-8 md:text-xl md:relative md:z-20'>
            As an IT project developer, my aim is to create innovative solutions that enhance organizational efficiency and productivity. I am deeply passionate about developing top-notch software and thrive in collaborative, multidisciplinary teams. So, feel free to connect!
          </p>
        </section>
      </section>
      <section className='grid grid-rows-2 gap-4 px-4 py-8 md:grid-cols-2 text-slate-500'>
        <button className='text-xl py-3 md:py-0 flex justify-center items-center gap-2'>
          <i className='bx bxs-file-doc text-4xl md:text-xl'></i>
          <a download="" href={CV} className="button button--flex">
            Get CV
          </a>
        </button>
        <button className='text-xl flex justify-center items-center gap-2'>
          <i className='bx bxs-right-arrow text-xl md:text-xl'></i>
          <a href="/projects">See my projects</a>
        </button>
      </section>
      <section className='text-xl flex justify-center items-center'>

      </section>
    </main>
  );
};

export default About;
