import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import GanadoresPage from "./components/GanadoresPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/ganadores" element={<GanadoresPage />} />
          </Routes>
        </main>
        <footer className="bg-blue-900 text-white p-6 mt-auto">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <img
                  src="/logo_cielo.webp"
                  alt="Logo Cielo"
                  className="h-8 w-auto"
                />
              </div>
              <div className="text-sm text-blue-200">
                © {new Date().getFullYear()} Agua Cielo. Todos los derechos
                reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
