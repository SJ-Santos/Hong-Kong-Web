import { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LoginRegister from './pages/LoginRegister';
import Orders from './pages/Orders';
import DishCard from './pages/components/DishCard';
export const AppContext = createContext();


function App(){
    const [orders, setOrders] = useState([]);
    
  const onAddToOrder = (name, cost, id, size, path, quantity) => {
    const nameExists = orders.some((order) => order.name === name);
    
    if (!nameExists) {
        
      setOrders([...orders, { name, cost, id, size, path, quantity }]);
    } else {
      setOrders(orders.map((order) => 
        order.name === name 
          ? { ...order, quantity: order.quantity + 1 }
          : order
      ));
    }
    console.log(orders)
  };
return(
    <div>
    <AppContext.Provider value={{orders,setOrders,onAddToOrder}}>
        <Router>
        <Routes>       
            <Route path="/" element={<Home/>}/>
            <Route path="/Login-registro" element={<LoginRegister/>}/>
            <Route path="/Pedidos" element={<Orders/>}/>
            <Route path="/DishCard" element={<DishCard />}/>
        </Routes>
     </Router>
     </AppContext.Provider>
    </div>    
)

}
export default App;