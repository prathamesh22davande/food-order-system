import React, { useState, useContext } from "react";

import Backdrop from "../UI/Backdrop";
import CartModal from "./CartModal";
import CartContext from "../../store/cart-context";

const CartButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.length;

  return (
    <div className="d-flex">
      <button type="button" className="btn btn-light" onClick={handleModalOpen}>
        Your Cart
        <span className="badge ms-4 ps-4 pe-4 pt-2 pb-2 bg-success text-light">
          {numberOfCartItems}
        </span>
      </button>

      {isModalOpen && (
        <Backdrop onModalClose={handleModalClose}>
          <CartModal onModalClose={handleModalClose} />
        </Backdrop>
      )}
    </div>
  );
};

export default CartButton;
