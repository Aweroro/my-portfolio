import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Projects from './routes/Projects/Projects';
import Contact from './routes/Contact/Contact';
import Skills from './routes/Skills/Skills';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <NavBar/>
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
