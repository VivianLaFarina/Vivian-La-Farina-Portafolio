import React from 'react';
import { Link } from 'react-router-dom';

const handleClickLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const Header = () => {
  return (
    <header className='flex justify-between py-20 px-6 md:px-2 text-slate-600 max-w-[1200px] mx-auto   '>
      <section>
        <button className='font-["Bruno_Ace"]'>
          <Link to="/" className='text-5xl md:text-7xl'>
            <i></i>
            vLf
          </Link>
        </button>
      </section>

      <section className='flex justify-between gap-4 items-center text-5xl '>



        <Link to="/menu" className='text-5xl md:text-7xl'>
          <i className='bx bx-command'></i>
        </Link>
      </section>
    </header>
  );
};

export default Header;
