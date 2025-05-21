import React from "react";
import "./fruits.css";
const Fruits = (props) => {
  const gstAmount = (props.price * parseFloat(props.gst)) / 100;
  const totalCost = props.price + gstAmount;

  const handleCheckout = () => {
    const toastEl = document.getElementById(`toast-${props.index}`);
    if (toastEl) {
      const toast = new window.bootstrap.Toast(toastEl);
      toast.show();
    } else {
      console.log("Toast element not found");
    }
  };

  return (
    <>
      <div className="container">
        <div
          className="card h-100 fruits-card border-2 border-success shadow-sm"
          style={{ width: "22rem" }}
        >
          <img
            src={props.image}
            className="card-img-top"
            alt={props.name}
          />
          <div className="card-body">
            <h5 className="card-title text-white fs-3 fw-bold">{props.name}</h5>
            <h6 className="text-white">$ {props.price}</h6>
            <p className="card-text text-white">{props.description}</p>
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="modal"
              data-bs-target={`#modal-${props.index}`}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div
          className="modal fade"
          id={`modal-${props.index}`}
          tabIndex="-1"
          aria-labelledby={`modalLabel-${props.index}`}
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title  fs-5" id={`modal-${props.index}`}>
                  Checkout
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6>{props.name}</h6>
                      <p>{props.description}</p>
                    </div>
                    <span>${props.price}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6>GST</h6>
                    </div>
                    <span>{props.gst}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6>Total Cost (USD)</h6>
                    </div>
                    <span>${totalCost.toFixed(2)}</span>
                  </li>
                </ul>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleCheckout}
                  type="button"
                  className="btn btn-dark"
                  data-bs-dismiss="modal"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="toast position-fixed bottom-0 end-0 m-3"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          id={`toast-${props.index}`}
        >
          <div className="toast-header bg-success">
            <strong className="me-auto text-white">Success</strong>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
          <div className="toast-body">
            You have successfully purchased {props.name} for $
            {totalCost.toFixed(2)}!
          </div>
        </div>
      </div>
    </>
  );
};

export default Fruits;
