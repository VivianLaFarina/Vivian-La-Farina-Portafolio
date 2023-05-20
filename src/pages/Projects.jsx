import React from 'react'
import Header from '../components/Header'

const Projects = () => {
  return (


    <main className=''>

      <Header />
      <section className=' flex justify-center py-12 px-4'>
      <table class="table p-4 bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th class="border-b-2 p-4 text-3xl text-slate-600 dark:border-dark-5 whitespace-nowrap font-normal">
              Work
            </th>
            <th class="border-b-2 p-4 font-extrabold dark:border-dark-5 whitespace-nowra text-2xl text-gray-900">
              features
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
              Pokedex
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              ....
            </td>

          </tr>
          <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
              Ricky and Morty
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              ....
            </td>

          </tr>
          <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
              Portfolio
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              ....
            </td>

          </tr>
          <tr class="text-gray-700">
            <td class="border-b-2 p-4 dark:border-dark-5">
              E-comerce
            </td>
            <td class="border-b-2 p-4 dark:border-dark-5">
              ....
            </td>

          </tr>
        </tbody>
      </table>



      </section>

      


    </main>






  )
}

export default Projects