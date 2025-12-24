
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ClientesPage from './pages/ClientesPage';
import ServiciosPage from './pages/ServiciosPage';
import EquiposPage from './pages/EquiposPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientes" element={<ClientesPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/equipos" element={<EquiposPage />} />
      </Routes>
    </Router>
  );
}

export default App;