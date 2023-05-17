import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Projects from './pages/Projects'
import './App.css'



function App() {

  return (
     <section>
      <div className="  font-['Bruno_Ace']">
        
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/about' element={<About />}/>
      </Routes>

      </div>



      
    

     </section>
     



  )
}

export default App
