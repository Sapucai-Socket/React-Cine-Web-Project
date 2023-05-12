import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { useLocation } from 'react-router-dom';

import './App.css'
import Footer from './components/Footer'

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/login' && <Header />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default App
