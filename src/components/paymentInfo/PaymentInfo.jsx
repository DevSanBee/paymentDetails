import React from "react";
import "./paymentInfo.css";

const PaymentInfo = () => {
  return (
    <>
      <div className="paymentInfo">
        <section className="section1">
          <span>
            <b>Payment Information</b>
            <span>Choose your method of payment</span>
          </span>
          <span className="paymentMethod">
            <div>
            <b>
              <label htmlFor="creditCard">
                <img
                  src="creditCard.png"
                  alt="creditCard"
                  className="creditCard"
                />
              </label>
            </b>
            <b>
              <input
                type="radio"
                name="creditCard"
                id="paypal"
                className="radioinfo"
              />
              <label htmlFor="creditCard">
                <img src="paypal.png" alt="paypal" className="paypal" />
              </label>
            </b>
            </div>
          </span>
        </section>
      </div>
    </>
  );
};

export default PaymentInfo;
