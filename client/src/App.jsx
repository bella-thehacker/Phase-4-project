import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Stay from './components/Stay'
import Dining from './components/Dining'
import Spa from './components/Spa'
import Corporate from './components/Corporate'
import Services from './components/Services'
import Contact from './components/Contact'





function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/dining" element={<Dining />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      
    </>
  )
}

export default App
