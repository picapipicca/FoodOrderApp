import { useContext } from "react";
import React from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    //reduce : a method which allows to transform an array of data into a single value
    const numberOfCartItems = cartCtx.items.reduce((curNum,item) => {
        return curNum + item.amount
    }, 0 );
  return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>장바구니</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
  );
};

export default HeaderCartButton;
