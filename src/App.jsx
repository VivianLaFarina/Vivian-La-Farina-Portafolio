import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'



function App() {

  return (
     <section>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About />}/>
      </Routes>

      
    

     </section>
     



  )
}

export default App
