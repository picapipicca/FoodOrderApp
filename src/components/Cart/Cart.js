import React, {useContext} from "react";
import classes from "./Cart.module.css";

import Modal from "../UI/Modal";
import CartContext from '../../store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmount = `${cartCtx.totalAmount} 원`
    const hasItems = cartCtx.items.length > 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((i) => (
        <li>{i.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
          <span>총 금액</span>
          <span> {totalAmount} </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onCloseCart} >닫기</button>
        {hasItems && <button className={classes.button}>주문하기</button> }  
      </div>
    </Modal>
  );
};

export default Cart;
