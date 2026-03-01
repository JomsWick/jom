import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import FlatIcon from './components/icons/FlatIcon';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setDark(!dark)}
          className={`relative w-14 h-8 top-2 flex items-center rounded-full p-1 transition-colors duration-300
            ${dark ? 'bg-gray-800' : 'bg-gray-300'}`}
        >
          <div
            className={`w-6 h-6 flex items-center justify-center bg-white rounded-full shadow-md transform transition-transform duration-300
              ${dark ? 'translate-x-6' : 'translate-x-0 bg-yellow-100'}`}
          >
            {dark ? (
              <FlatIcon icon="rr-moon" className="text-sm text-gray-500" />
            ) : (
              <FlatIcon icon="rr-sun" className="text-sm text-yellow-500" />
            )}
          </div>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
      </Routes>
    </>
  );
};

export default App;
