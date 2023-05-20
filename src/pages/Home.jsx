import React from 'react'
import Header from '../components/Header'
import Navbar1 from '../components/Navbar1'

const Home = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <section className=' min-h-screen grid grid-rows-[auto_1fr]'>
            {/* Portafolio Vivian La Farina */}



            {/* Header */}
            <Header />

            {/* Introdotion seccion */}
            <main className=' text-slate-600'>
                <section>
                    <article className='grid-flow-row py-12 px-10 space-x-4  font-medium'>
                        <div >
                            <img src="" alt="" />
                        </div>
                        <h2 className=' text-3xl px-5 '>Hey, I'm
                            <p className=' text-5xl font-extrabold py-2 px-4'>Vivian La farina
                            </p>
                        </h2>
                        <p className=' text-lg py-8 '> I'am a Communicator &  Web Developer, specialized in digital projects</p>
                    </article>
                </section>

                <section>
                    <Navbar1 />




                </section>

            </main>

        </section>
    )
}

export default Home