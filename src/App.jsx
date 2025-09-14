// src/App.jsx

import { Routes, Route } from 'react-router-dom';
import LandingPage from './home.jsx';
import AutiqoWelcome from './proyects/autiqo.jsx';
import { AppProvider } from './context/AppContext.jsx';

export default function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/proyectos/autiqo" element={<AutiqoWelcome />} />
      </Routes>
    </AppProvider>
  );
}
