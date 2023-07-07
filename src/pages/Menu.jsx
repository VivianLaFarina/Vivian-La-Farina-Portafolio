import React from 'react';
import Header from '../components/Header';


const Menu = () => {


  return (
    <section className='min-h-screen'>
      {/* Portafolio Vivian La Farina */}
      {/* Header */}
      <Header />

      {/* Introduction section */}
      <section className="flex justify-center py-12 px-4">
        <div className="max-w-md mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-lg shadow-lg p-6">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-b-2 p-4 text-3xl text-white font-medium">
                  Work
                </th>
                <th className="border-b-2 p-4 text-2xl text-white font-extrabold">
                  Features
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-white">
                <td className="border-b-2 p-4">Pokedex</td>
                <td className="border-b-2 p-4">....</td>
              </tr>
              <tr className="text-white">
                <td className="border-b-2 p-4">Ricky and Morty</td>

              </tr>
              <tr className="text-white">
                <td className="border-b-2 p-4">Portfolio</td>

              </tr>
              <tr className="text-white">
                <td className="border-b-2 p-4">E-commerce</td>
                <td className="border-b-2 p-4">....</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Menu;
