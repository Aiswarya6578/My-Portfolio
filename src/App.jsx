import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Hero from './Components/Hero';

import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header /> 
      <Routes>
       
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<Home/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
