import React from 'react';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-3">
      <div>
        <h5 className="mb-2">{props.name}</h5>
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-success me-3">{price}</span>
          <span className="badge bg-secondary rounded-pill">x {props.amount}</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row">
        <button className="btn btn-outline-danger btn-sm me-2 mb-2 mb-md-0" onClick={props.onRemove}>
          −
        </button>
        <button className="btn btn-outline-success btn-sm" onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
