import React from 'react';
import mealsImage from '../../assests/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1 clas>React Meals</h1>
                <HeaderCartButton></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of meal"></img>
            </div>
        </React.Fragment>
    )

}

export default Header;