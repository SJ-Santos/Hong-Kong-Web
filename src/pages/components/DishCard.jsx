import React, { useState,useContext } from 'react';
import './components-styles/DishCard_styles.css';
import { AppContext } from '../../App';
//*********image************** */
import carrinho from '../assets/icons/whiteCart.svg';


function DishCard({ name, cost, id, path,quantity}) {
  const [size, setSize] = useState("Grande"); // Estado para armazenar o tamanho selecionado
  const {onAddToOrder} = useContext(AppContext)
  // Função para alterar o tamanho selecionado
  const handleSizeChange = (event) => {
    setSize(event.target.value); // Atualiza o estado do tamanho
  };
  return (
    <div className="dishes-all">
      <img id="dish_photo" src={path} alt={name} /> {/* A imagem vem via prop */}
      <h3 className="dish_name">{name}</h3>
      <p className="cost">{cost}</p>

      <div id="choice_size">
        <input
          required
          type="radio"
          name="size"
          value="Grande"
          checked={size === 'Grande'}
          onChange={handleSizeChange}
        />
        <p>Grande</p>

        <input
          required
          type="radio"
          name="size"
          value="Junior"
          checked={size === 'Junior'}
          onChange={handleSizeChange}
        />
        <p>Junior</p>
      </div>

      <button onClick={() => onAddToOrder(name, cost, id, size, path,quantity= 1)}>
        <img src={carrinho} alt="Adicionar ao carrinho" />
        ADICIONAR
      </button>
    </div>
  );
}

export default DishCard;
