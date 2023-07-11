import React from 'react'
import Header from '../components/Header'

const Projects = () => {
  return (


    <main className=''>

      <Header />
      <section className=" text-slate-500 p-4 py-4 grid gap-10 sm:grid-cols-2 max-w-[1200px] mx-auto">
        {/* Seccion izquierda */}
        <section className="grid gap-10">
          <div>
            <h3 className="uppercase text-sm text-gray-400 font-semibold">
              My projects
            </h3>
            <h2 className="text-3xl font-semibold mt-2">

              This is a small sample of my work
            </h2>
          </div>

          <article className="bg-gray-d relative">
            <div>
              <img src="/images/project1.png" alt="" />
            </div>
            <section className="p-6">
              <h4>Pokedex App</h4>
              <p className="text-gray-400 text-sm">
                In the Pokedex app, I implemented the routes /pokedex and /pokedex/:id, allowing users to navigate through different pages and view specific entries.
              </p>
              <a
                href="https://pokedex-vlf.netlify.app/"
                className="bg-slate-400  p-1 text-lg absolute bottom-0 right-0"
              >
                <i className="bx bx-link-external text-slate-700"></i>
              </a>
            </section>
          </article>

          <article className="bg-gray-d relative">
            <div>
              <img src="/images/project2.png" alt="" />
            </div>
            <section className="p-6">
              <h4>Rick & Morty App </h4>
              <p className="text-gray-400 text-sm">
                In the Pokedex app, I implemented the routes /pokedex and /pokedex/:id, allowing users to navigate through different pages and view specific entries
              </p>
              <a
                href=" https://vlf-rick-and-morty-app.netlify.app/"
                className=" bg-slate-400  p-1 text-lg absolute bottom-0 right-0"
              >
                <i className="bx bx-link-external text-slate-700"></i>
              </a>
            </section>
          </article>
        </section>

        {/* Seccion derecha */}
        <section className="grid gap-10">
          <article className="bg-gray-d relative">
            <div>
              <img src="/images/project3.png" alt="" />
            </div>
            <section className="p-6">
              <h4>CoinView Mobile App Design</h4>
              <p className="text-gray-400 text-sm">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for 4
                months and was a very challenging one.
              </p>
              <a
                href="https://vlf-academlo-shop-ecomerce.netlify.app"
                className="bg-slate-400 p-1 text-lg absolute bottom-0 right-0"
              >
                <i className="bx bx-link-external text-slate-700"></i>
              </a>
            </section>
          </article>

          <article className="bg-gray-d relative">
            <div>
              <img src="/images/project4.png" alt="" />
            </div>
            <section className="p-6">
              <h4> Personal Portfolio</h4>
              <p className="text-gray-400 text-sm">
                I possess expertise in user experience design, user interface design, usability testing, interaction design, and front-end development.
              </p>
              <a
                href="https://vivianlf.netlify.app/"
                className=" bg-slate-400 p-1 text-lg absolute bottom-0 right-0"
              >
                <i className=" bx bx-link-external text-slate-700"></i>
              </a>
            </section>
          </article>

          <button className="border-[2px] border-state-700 p-2 max-w-max mx-auto text-slate-700">VIEW ALL PROJECTS</button>
        </section>
      </section>


    </main>






  )
}

export default Projects