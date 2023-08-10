import React from 'react';
import Header from '../components/Header';
import CV from "../assets/CV.pdf";

const About = () => {
  return (
    <main>
      <Header />
      <section className=' px-4 md:px-10 text-slate-400 md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] max-w-[1200px] mx-auto'>
        <div className='relative'>
          <img className='w-full md:absolute rounded-3xl md:top-1/2 md:-translate-y-1/2 md:w-[120%] md:max-w-none ' src="/images/img.png" alt="" />
        </div>
        <section className='px-4  py-2 bg-slate-100 md:grid md:place-content-center md:px-10 rounded-tr-3xl rounded-bl-3xl'>
          <h2 className='text-3xl   md:text-5xl grid grid-rows-1 md:relative md:z-20'>
            About
          </h2>
          <p className='mt-4 text-sm md:mt-6 text-slate-600 px-4 md:px-8 md:text-2xl md:relative md:z-20'>
            I am IT project developer. I have successfully created robust data solutions for both on-premises and cloud environments. With strong computing fundamentals and experience in programming and quality assurance, enabling me to build high-quality and reliable solutions. So, feel free to connect!
          </p>
        </section>
        <section className='grid grid-rows-2 px-2 md:py-24 md:gap-16 py-4 md:grid-cols-2  md:px-3  text-slate-600'>
          <button className='text-xl py-3 flex justify-center  items-center  gap-2'>
            <i className='bx bxs-file-doc text-4xl md:text-4xl'></i>
            <a download="" href={CV} className="button button--flex ">
              Get CV
            </a>
          </button>
          <button className='text-xl flex justify-center items-center gap-2'>
            <i className='bx bxs-envelope  md:text-4xl '></i>
            <a href="/contact">Get in touch</a>
          </button>
        </section>
        <section className='text-xl flex justify-center items-center'>

        </section>
      </section>

    </main>
  );
};

export default About;
