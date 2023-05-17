import React from 'react'

const Header = () => {
  return (
        <header className=' flex justify-between py-8 px-6 '>
          <section>
            <button>
            <h1 className=' text-4xl cursor-pointer'>vLf</h1>
            </button>
           </section>

           <section className=' flex justify-between gap-4 items-center text-xl'>
              <button>EN</button>
              <button className='text-lg'>
              <i className='bx bx-moon '></i>
              </button>

              <button >
              <i className='bx bxs-grid text-4xl'></i>
              </button>
           </section>
        </header>

  )
}

export default Header