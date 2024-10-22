import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Stay from './components/Stay'
import Dining from './components/Dining'
import Spa from './components/Spa'
import Corporate from './components/Corporate'
import Contact from './components/Contact'
import BookNow from './components/BookNow'
import Membership from './components/Membership'
import Footer from './components/Footer'


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
        <Route path="/contact uc" element={<Contact />} />
        <Route path="/book-now" element={<BookNow/>} />
        <Route path="/membership" element={<Membership />} />
      </Routes>

    <div>
      <Footer />
    </div>
      
    </>
  )
}

export default App
