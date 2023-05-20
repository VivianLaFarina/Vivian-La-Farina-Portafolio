
const Navbar1 = () => {
    return (


            <nav className=' grid grid-row-s space-y-2 py-4 md:space-y-0 md:grid md:grid-cols-2' >

                <button className=' text-xl flex justify-center  gap-2 '> <i className='bx bxs-right-arrow text-xl'></i>
                    <a href="/projects">see my projects</a>
                </button>

                <button className=' text-xl  py-3 md:py-0 flex justify-center gap-2'><i className='bx bxs-right-arrow text-xl'></i>
                    <a href="/about"> more  about me</a>
                </button>

            </nav>

    )
}

export default Navbar1





