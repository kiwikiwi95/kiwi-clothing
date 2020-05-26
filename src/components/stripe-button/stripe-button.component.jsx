import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //Stripe wants the price in cents, so we multiply our price by 100.
  const publishableKey = "pk_test_0tBoRUwIzT9iTZav9Ylz87nD00NukKPP9J";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="KIWI CLOTHING Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} //submission handler
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;