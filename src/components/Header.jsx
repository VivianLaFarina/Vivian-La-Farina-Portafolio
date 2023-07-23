import React from 'react';
import { Link } from 'react-router-dom';

const handleClickLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const Header = () => {
  return (
    <header className='flex justify-between py-12 px-8 md:px-2 text-slate-600 max-w-[1200px] mx-auto   '>
      <section>
        <button className='font-["Bruno_Ace"]'>
          <Link to="/" className=' text-4xl md:text-5xl'>
            <h1 className=' transform hover:scale-110 '>vLf</h1>

          </Link>
        </button>
      </section>

      <section className='flex justify-between gap-4 items-center text-4xl '>



        <Link to="/menu" className='text-4xl md:text-5xl'>
          <i className='origin-bottom-left  hover:-rotate-360 hover:translate-x-full  hover:scale-125 transition duration-500 bx bx-command  '></i>
        </Link>
      </section>
    </header>
  );
};

export default Header;
