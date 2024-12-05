import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css'
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Orders from './pages/orders';
import DishCard from './pages/components/DishCard';


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
        <Routes>       
            <Route path="/" element={<Home/>}/>
            <Route path="/LoginRegister" element={<LoginRegister/>}/>
            <Route path="/Orders" element={<Orders/>}/>
            <Route path="/DishCard" element={<DishCard />}/>
        </Routes>
     </Router>
  </StrictMode>,
)
