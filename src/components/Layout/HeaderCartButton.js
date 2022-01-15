import { useContext, useEffect, useState } from "react";
import React from "react"; 
import classes from "./HeaderCartButton.module.css";

import CartIcon from "./CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const [ btnHighlighted , setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    //reduce : a method which allows to transform an array of data into a single value
    const numberOfCartItems = items.reduce((curNum,item) => {
        return curNum + item.amount
    }, 0 );
    
    // const btnClasses = `${classes.button} ${classes.bump}`;
    const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;
    

    useEffect(()=>{
        if (items.length === 0){
            return;
        }
        setBtnIsHighlighted(true);
        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //component가 사라졌을시 timer도 지워주는 clean up function
        return ()=>{
            clearTimeout(timer);
        };
    },[items]);

  return (
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>장바구니</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
  );
};

export default HeaderCartButton;
