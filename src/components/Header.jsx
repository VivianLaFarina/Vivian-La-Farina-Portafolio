import React from 'react';
import { Link } from 'react-router-dom';

const handleClickLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const Header = () => {
  return (
    <header className='flex justify-between py-2 px-4  md:px-12 lg:px-0 md:py-20 text-slate-600 max-w-[1400px] mx-auto   '>



      <section className=''>
        <button className='font-["Bruno_Ace"]  py-4 flex justify-between '>
          <Link to="/" className=' text-2xl md:text-4xl'>
            <div>
              <h1 className=' transform hover:scale-x-50  hover:scale-y-110 duration-1000  hover:translate-x-6 \   '>vLf</h1>
            </div>


          </Link>
        </button>
      </section>


      <section className='flex justify-between gap-4 items-center text-4xl '>
        <Link to="/menu" className='text-3xl md:text-5xl'>
          <i className=' origin-bottom-left hover:-rotate-90 hover:translate-x-full  hover:scale-125 transition duration-700 bx bx-command  '></i>
        </Link>
      </section>



    </header>
  );
};

export default Header;
