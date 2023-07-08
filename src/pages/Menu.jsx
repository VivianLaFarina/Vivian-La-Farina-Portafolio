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
      <section className='flex justify-center py-10 px-4 text-4xl md:text-6xl'>
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
                <Link to="/" className='font-["Bruno_Ace"]'>
                  <i className=''></i>
                  Home
                </Link>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-briefcase-alt text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <Link to="/projects" className='font-["Bruno_Ace"]'>
                  <i className=''></i>
                  Work
                </Link>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-info-circle text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <Link to="/about" className='font-["Bruno_Ace"]'>
                  <i className=''></i>
                  About
                </Link>
              </td>
            </tr>
            <tr className="text-gray-600">
              <td className="border-b-2 p-4 dark:border-dark-5">
                <i className='bx bx-conversation text-slate-500 text-3xl'></i>
              </td>
              <td className="border-b-2 p-4 dark:border-dark-5">
                <Link to="/contact" className='font-["Bruno_Ace"]'>
                  <i className=''></i>
                  Contact
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

    </section>
  );
};

export default Menu;
