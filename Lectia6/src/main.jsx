import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

import Navbar from './components/layouts/Navbar.jsx';
import Footer from './components/layouts/Footer.jsx';
import './index.css';
import Header from './components/layouts/Header.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <App />
    <Footer/>
  </BrowserRouter>,
)
