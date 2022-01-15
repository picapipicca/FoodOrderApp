import React, {useContext} from "react";
import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
    //const price = `${props.price.toFixed(2)} 원 `; 소수점 두번째 자리까지 보이게 해줌
    const price = `${props.price} 원 `;
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
      cartCtx.addItem({
        id : props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

MealItem.defaultProps = {
  name: "똠얌꽁",
  description: "맛있다!",
  price: 15000,
};
export default MealItem;
