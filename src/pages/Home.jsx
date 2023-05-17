import React from 'react'
import Header from '../components/Header'

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

  return (
    <section  className='min-h-screen grid grid-rows-[auto_1fr]'>
         {/* Portafolio Vivian La Farina */}



         {/* Header */}
         <Header />

         {/* Introdotion seccion */}
        <section>
            <article className='grid-flow-row py-20 px-10'>
                <div>
                    <img src="" alt="" />
                </div>
                <h2> Hey, I'm Vivian La Farina</h2>
                <p>I'am a Communicator &  Web Developer, specialized in digital projects</p>
                <form className=' grid grid-row-s' onSubmit={handleSubmit}>
                    <button>see my Projects</button>
                    <button>more about me</button>
                </form>
            </article>
        </section>

    </section>
  )
}

export default Home