import React from 'react'
import CreditCardForm from "./paymentForm/Payment";
import Total from "./Total/Total";

const Trip = () => {
  return (
    <div>
      <CreditCardForm />
      <Total />
    </div>
  )
}

export default Trip