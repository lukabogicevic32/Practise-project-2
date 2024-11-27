import React from 'react';
import mealsImage from '../../assets/meals.jpg';
import { Navbar, Nav } from 'react-bootstrap';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <React.Fragment>
      <Navbar className={`navbar navbar-expand-lg ${classes.navbar}`} fixed="top">
        <Navbar.Brand href="#" className="text-white">ReactMeals</Navbar.Brand>
        <Nav className="ms-auto">
          <HeaderCartButton onClick={props.onShowCart} />
        </Nav>
      </Navbar>
     
     <div className={classes['main-image']}>
        <img 
          src={mealsImage} 
          alt="A table full of food" 
          className={classes['main-image-img']}
        />
      </div>
    </React.Fragment>
  );
};

export default Header;
