import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <main>


     <Header/>
    <section className=' py-10 px-10 text-zinc-400 md:grid md:grid-cols-[1fr_2fr] md:min-h-[500px] max-w-[1200px] mx:auto'>
        

    

        <div className=' relative'>
            <img  className=' w-full md:absolute  rounded-3xl md:top-1/2  md:-translate-y-1/2 md:w-[130%] md:max-w-none' src="/images/img.png" alt="" />
        </div>
        <section className=' px-4 py-12 bg-slate-100 md:grid md:place-content-center md:px-10 rounded-tr-3xl rounded-bl-3xl'>
            <h2 className='text-4xl md:text-7xl grid grid-rows-1 md:relative md:z-20'> About
            
                <span className=' text-slate-500 md:px-8 text-xl md:text-4xl  py-3 px-4'> Communicator & Web Developer</span>
                <span className=' text-slate-700 md:px-8  text-xs md:text-xl px-3 '> Javascript | React JS | Node JS | React Native</span>
                <p className='mt-4 text-sm md:mt-30 text-slate-500 px-3  md:px-8 md:text-xl md:relative md:z-20'>I am a dynamic and creative individual who is keen on developing a career in Software Development. I possess good interpersonal skills, strong analytical and problem-solving ability as well as a good knowledge of Front End Development. I’m always adding new skills to my repertoire. I’m also eager to meet other software engineers in the area, so feel free to connect!</p>
            </h2>
        </section>
    </section>
    </main>
  )
}

export default About