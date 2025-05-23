import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import ConfidentePage from './pages/Confidente';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/confidente" element={<ConfidentePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;