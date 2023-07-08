import React from 'react';
import { Link } from 'react-router-dom';

const handleClickLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};

const Header = () => {
  return (
    <header className='flex justify-between py-20 px-6 md:px-12 text-slate-600 max-w-[1200px] mx-auto'>
      <section>
        <button className='font-["Bruno_Ace"]'>
          <Link to="/" className='text-5xl'>
            <i className=''></i>
            vLf
          </Link>
        </button>
      </section>

      <section className='flex justify-between gap-4 items-center text-4xl'>



        <Link to="/menu" className='text-5xl'>
          <i className='bx bx-grid-alt'></i>
        </Link>
      </section>
    </header>
  );
};

export default Header;
