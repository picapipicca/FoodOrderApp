import React, {Fragment} from 'react';
import classes from "./Header.module.css";

import mealsImage from "../../assets/Meals.jpeg";
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
                <header className={classes.header}>
                    <h1>Haewon's Meals</h1>
                    <HeaderCartButton/>
                </header>
                <div className={classes["main-image"]}>
                    <img src={mealsImage} alt="cafe highwaste in Jongro, Seoul" />
                </div>
        </Fragment>
    );
};

export default Header;