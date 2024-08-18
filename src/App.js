import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Contact from './routes/Contact/Contact';
import Skills from './routes/Skills/Skills';

function App() {

  return (
    <div className={'min-h-screen dark bg-gray-900'}>
      <div className='flex flex-row flex-grow items-center justify-between mx-7'>
      <Header/>
      <NavBar/>
      </div>
      <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;
