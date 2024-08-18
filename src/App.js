import './App.css';
import React,{useState} from 'react';
import Header from './components/Header';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  );
}

export default App;
