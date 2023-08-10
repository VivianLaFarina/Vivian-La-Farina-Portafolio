import React from 'react';
import Header from '../components/Header';

const ProjectCard = ({ imageSrc, title, description, link }) => (
  <article className="bg-gray-d relative">
    <div>
      <img src={imageSrc} alt={title} />
    </div>
    <section className="p-6">
      <h4>{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
      <a href={link} className="bg-slate-400 p-1 text-lg absolute bottom-0 right-0">
        <i className="bx bx-link-external text-slate-700"></i>
      </a>
    </section>
  </article>
);

const Projects = () => {
  return (
    <main className="">
      <Header />
      <section className="text-slate-500 p-4 py-8 md:py-16 grid gap-10 md:grid-cols-2 lg:max-w-6xl mx-auto">
        <section className="grid gap-10">
          <div>
            <h3 className="uppercase text-sm text-gray-400 font-semibold">My projects</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 md:mt-6">
              This is a small sample of my work
            </h2>
          </div>
          <ProjectCard
            imageSrc="/images/project1.png"
            title="Pokedex App"
            description="Implemented routes for navigation and viewing specific entries."
            link="https://pokedex-vlf.netlify.app/"
          />
          <ProjectCard
            imageSrc="/images/project2.png"
            title="Rick & Morty App"
            description="Implemented routes for navigation and viewing specific entries."
            link="https://vlf-rick-and-morty-app.netlify.app/"
          />
        </section>
        <section className="grid gap-10">
          <ProjectCard
            imageSrc="/images/project3.png"
            title="CoinView Mobile App Design"
            description="Redesigned website and mobile app for CBRE."
            link="https://vlf-academlo-shop-ecomerce.netlify.app"
          />
          <ProjectCard
            imageSrc="/images/project4.png"
            title="Personal Portfolio"
            description="Expertise in UX/UI design, usability testing, and front-end development."
            link="https://vivianlf.netlify.app/"
          />
          <button className="border-[2px] border-state-700 p-2 max-w-max mx-auto text-slate-700">
            VIEW ALL PROJECTS
          </button>
        </section>
      </section>
    </main>
  );
};

export default Projects;
