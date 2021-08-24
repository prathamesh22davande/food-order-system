import React from "react";

const CartItem = (props) => {
  return (
    <div className="me-4">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text flex-end text-success fw-bold">
            $ {props.price}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <h4 className="me-4">x {props.amount}</h4>
          <div>
            <button
              className="btn btn-outline-success me-4"
              onClick={props.onAddItem}
            >
              +
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={props.onRemoveItem}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
