import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main.css'
import Home from './pages/Home';
// import LoginRegister from './pages/LoginRegister';
import Orders from './pages/Orders';
// import Header from './pages/components/Header';



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            {/* <Route path="/LoginRegister" element={<LoginRegister/>}/> */}
            <Route path="/Orders" element={<Orders/>}/>
        </Routes>
     </Router>
  </StrictMode>,
)
