import { useContext, useEffect, useState } from "react";
import React from "react";
import { Button } from "react-bootstrap"; // Using react-bootstrap Button
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `btn d-flex align-items-center ${btnIsHighlighted ? 'bump' : ''}`;
  
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button 
      className={btnClasses} 
      style={{
        border: '#4d1601', 
        backgroundColor: '#4d1601', 
        borderRadius: '30px', 
        padding: '0.75rem 2.5rem', 
        color: 'white', 
        fontWeight: 'bold',
        marginRight: '5rem',
      }} 
      onClick={props.onClick}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge" style={{backgroundColor: '#b94517', borderRadius: '15px', marginLeft: '1rem' }}>
        {numberOfCartItems}
      </span>
    </Button>
  );
};

export default HeaderCartButton;
