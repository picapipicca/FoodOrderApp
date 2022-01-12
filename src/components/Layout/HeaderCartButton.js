import React from 'react';
import classes from "./HeaderCartButton.module.css";

import CartIcon from "./CartIcon";

const HeaderCartButton = (props) => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}><CartIcon /></span>
            <span>장바구니</span>
            <span className={classes.badge}>3</span>
        </button>
    );
};

export default HeaderCartButton;