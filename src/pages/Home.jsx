import React from 'react'
import Header from '../components/Header'

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

  return (
    <section  className=' min-h-screen grid grid-rows-[auto_1fr]'>
         {/* Portafolio Vivian La Farina */}



         {/* Header */}
         <Header />

         {/* Introdotion seccion */}
        <section>
            <article className='grid-flow-row py-20 px-8 space-x-4  font-medium'>
                <div>
                    <img src="" alt="" />
                </div>
                <h2 className=' text-3xl '>Hey, I'm 
                    <p className=' text-5xl font-extrabold'>
                    Vivian La Farina
                    </p>

                </h2>
                <p className=' text-xl py-8 '> I'am a Communicator &  Web Developer, specialized in digital projects</p>
                <form className=' grid grid-row-s space-y-2 py-4' onSubmit={handleSubmit}>

                    <button className=' text-xl flex justify-center gap-2'> <i class='bx bxs-right-arrow text-xl'></i>
                      <h3>see my projects </h3>
                    </button>
                    <button className=' text-xl  py-3 flex justify-center gap-2'><i class='bx bxs-right-arrow text-xl'></i>
                          <h3>more about me</h3>
                    </button>
                </form>
            </article>
        </section>

    </section>
  )
}

export default Home