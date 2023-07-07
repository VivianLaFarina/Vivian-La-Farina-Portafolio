import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <section className='min-h-screen'>
      {/* Portafolio Vivian La Farina */}
      {/* Header */}
      <Header />

      {/* Introduction section */}
      <section className='flex justify-center py-10 px-4 text-4xl'>
        <table className="table p-4 bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th className="border-b-2 p-4 text-3xl text-slate-600 dark:border-dark-5 whitespace-nowrap font-normal"></th>
              <th className="border-b-2 p-4 text-5xl text-slate-600 dark:border-dark-5 whitespace-nowrap font-normal">
                Menu
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5 text-slate-500 text-3xl">
                <i className='bx bx-terminal'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <button className='font-["Bruno_Ace"]'>
                  <Link to="/" >
                    <i className=''></i>
                    Home
                  </Link>
                </button>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-briefcase-alt text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <button className='font-["Bruno_Ace"]'>
                  <Link to="/projects">
                    <i className=''></i>
                    Work
                  </Link>
                </button>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-info-circle text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <button className='font-["Bruno_Ace"]'>
                  <Link to="/about">
                    <i className=''></i>
                    About
                  </Link>
                </button>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-conversation text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <button className='font-["Bruno_Ace"]'>
                  <Link to="/contact">
                    <i className=''></i>
                    Contact
                  </Link>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className='flex flex-col items-center justify-center gap-6 px-4 py-8 md:px-10 md:py-12 text-slate-500 text-6xl'>
        <button className='flex justify-center gap-2'>
          <i className='bx bxl-github'></i>
          <a href="/projects"></a>
        </button>
        <button className='py-3 md:py-0 flex justify-center gap-2'>
          <i className='bx bxl-linkedin'></i>
          <a href="/about"></a>
        </button>
      </section>
    </section>
  );
};

export default Menu;
