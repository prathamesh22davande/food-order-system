import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartItem from "./CartItem";

const CartModal = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHanlder = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <div
      className="card border-0"
      style={{
        width: "60%",
        top: "10vh",
        zIndex: "100",
        left: "20%",
      }}
    >
      <div className="card-header bg-success text-light fw-bold border border-success border-4">
        <h4>Your Cart</h4>
      </div>
      <div className="card-body">
        <div style={{ maxHeight: "20rem", overflow: "scroll" }}>
          {/* <CartItem name="Coffee" price="25" amount="1" />
        <CartItem name="Coffee" price="25" amount="1" />
        <CartItem name="Coffee" price="25" amount="1" /> */}
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              amount={item.amount}
              onAddItem={addItemHandler.bind(null, item)}
              onRemoveItem={removeItemHanlder.bind(null, item.id)}
            />
          ))}
        </div>
        <h2 className="mb-4">Total Amount : $ {totalAmount}</h2>

        <button className="btn btn-success me-4" disabled={!hasItems}>
          Order
        </button>
        <button className="btn btn-outline-danger" onClick={props.onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
