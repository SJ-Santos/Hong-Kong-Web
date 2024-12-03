import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Home from './pages/Home';
import Orders from './pages/Orders'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Orders></Orders>
  </StrictMode>,
)
