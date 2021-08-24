import React, { useContext, useRef, useState } from "react";
import CartContext from "../../store/cart-context";

const MenuItem = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const submitHanlder = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };

  return (
    <div className=" col col-xs-12 col-md-6 col-lg-4 d-flex align-items-stretch">
      <div className="card card-body mb-4 border-2 border-success">
        <img
          src={props.image}
          className="card-img-top"
          style={{
            width: "100%",
            height: "15rem",
          }}
          alt="..."
        />
        <div className="mt-2">
          <h5>{props.name}</h5>
          <h5 className="text-success fw-bolder">$ {props.price}</h5>
        </div>
        <form onSubmit={submitHanlder}>
          <div className="d-flex mb-4 justify-content-between align-items-center">
            <span className="fw-bold me-2">Amount :</span>
            <input
              ref={amountInputRef}
              defaultValue="1"
              type="number"
              className="form-control"
              style={{ width: "70%" }}
            />
          </div>
          <button type="submit" className="btn btn-success fw-bold ">
            Add to Cart
          </button>
          {!amountIsValid && (
            <p className="text-danger">Amount must between 1-5</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default MenuItem;
