import React, { useState } from 'react';
import './components-styles/DishCard_styles.css';

//*********image************** */
import carrinho from '../assets/icons/whiteCart.svg';

function DishCard({ name, cost, id, onAddToOrder, image }) {
  const [size, setSize] = useState(''); // Estado para armazenar o tamanho selecionado

  // Função para alterar o tamanho selecionado
  const handleSizeChange = (event) => {
    setSize(event.target.value); // Atualiza o estado do tamanho
  };

  return (
    <div className="dishes-all">
      <img id="dish_photo" src={image} alt={name} /> {/* A imagem vem via prop */}
      <h3 className="dish_name">{name}</h3>
      <p className="cost">{cost}</p>

      <div id="choice_size">
        <input
          type="radio"
          name="size"
          value="Grande"
          checked={size === 'Grande'}
          onChange={handleSizeChange}
        />
        <p>Grande</p>

        <input
          type="radio"
          name="size"
          value="Junior"
          checked={size === 'Junior'}
          onChange={handleSizeChange}
        />
        <p>Junior</p>
      </div>

      <button onClick={() => onAddToOrder(name, cost, id, size)}>
        <img src={carrinho} alt="Adicionar ao carrinho" />
        ADICIONAR
      </button>
    </div>
  );
}

export default DishCard;
