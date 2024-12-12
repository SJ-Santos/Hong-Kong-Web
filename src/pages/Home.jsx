import React, { useState, useContext } from 'react';
import Header from './components/Header';
import Sobrenos from './components/AboutUs';
import SectionMenu from './components/SectionMenu';
import SectionHome from './components/SectionHome';
import './styles/Home_styles.css';

import { AppContext } from '../App';
function Home() {
  const { orders, setOrders, onAddToOrder } = useContext(AppContext)

  return (
    <div>
      <Header />
      <main id="content">
        
         <SectionHome/>
         <SectionMenu />
         <section id="about"></section>
         <Sobrenos />
         
      </main>
    </div>
  );
}

export default Home;
