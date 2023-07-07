import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'
import Menu from './pages/Menu'




function App() {

  return (
    <>

      <main className="  font-['Bruno_Ace']">


        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />


        </Routes>


      </main>






    </>




  )
}

export default App
