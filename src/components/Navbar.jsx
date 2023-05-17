import React from 'react'

const Navbar = () => {
  return (
    <header className=' flex justify-between py-7 px-6'>

      <section>
        <h1 className=' text-2xl cursor-pointer'>vLf</h1>
      </section>

      <section className=' flex justify-between gap-4 items-center text-4xl  ' >
        <h1 className='text-lg cursor-pointer'>EN</h1>

      <section className=' text-xl cursor-pointer '>
        <i class='bx bx-moon '></i>
      </section>

      <section className=' text-4xl cursor-pointer'>
      <i class='bx bxs-grid'></i>
      </section>
      

      </section>
      
    </header>
  )
}

export default Navbar