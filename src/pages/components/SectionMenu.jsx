import DishCard from '../components/DishCard';
import dishes from '../dishes.json'
function SectionMenu(){
    return(
        <section id="menu">
        <div id="line">
          <div id="l1"></div>
          <h1>CARDÁPIO</h1>
          <div id="l2"></div>
        </div>
        <div id="dishes">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              name={dish.name}
              cost={dish.cost}
              id={dish.id}
              path={dish.path}
              quantity={dish.quantity}
            />
          ))}
        </div>
      </section>
    );
};


export default SectionMenu;