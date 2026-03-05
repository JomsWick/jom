import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect, useState } from 'react';
import FlatIcon from './components/icons/FlatIcon';
import Maintenance from './pages/Maintenance';
import NotFound from './pages/NotFound';
import TargetCursor from './components/cursor/TargetCursor';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const isMaintenance = import.meta.env.VITE_MAINTENANCE === 'false';
  if (isMaintenance) {
    return <Maintenance />;
  }


  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
      />
      <div className="fixed 
          top-3 right-3
          sm:top-4 sm:right-4
          lg:top-6 lg:right-6
          z-50">

        <button
          onClick={() => setDark(!dark)}
          className={`
            relative flex items-center
            w-12 h-7 sm:w-14 sm:h-8
            rounded-full p-1
            transition-colors duration-300
            ${dark ? 'bg-gray-800' : 'bg-gray-300'}
          `}
        >
          <div
            className={`
              flex items-center justify-center
              w-5 h-5 sm:w-6 sm:h-6
              rounded-full shadow-md
              transform transition-transform duration-300
              ${dark 
                ? 'translate-x-5 sm:translate-x-6 bg-white'
                : 'translate-x-0 bg-teal-100'}
            `}
          >
            {dark ? (
              <FlatIcon icon="rr-moon" className="text-xs sm:text-sm text-gray-500" />
            ) : (
              <FlatIcon icon="rr-sun" className="text-xs sm:text-sm text-teal-600" />
            )}
          </div>
        </button>
      </div>
      <Routes>
        <Route path="/" element={<Home dark={dark} />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

export default App;
