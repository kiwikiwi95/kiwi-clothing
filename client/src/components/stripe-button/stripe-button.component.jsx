import React from "react";
import { connect } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { checkOutSuccess } from "../../redux/user/user.actions";

const StripeCheckoutButton = ({ price, checkOutSuccess }) => {
  const priceForStripe = price * 100; //Stripe wants the price in cents, so we multiply our price by 100.
  const publishableKey = "pk_test_0tBoRUwIzT9iTZav9Ylz87nD00NukKPP9J";

  const onToken = token => {
    axios({ 
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      checkOutSuccess();
      alert("payment successful");
    }).catch(error => {
      console.log("Payment error: ", JSON.parse(error));
      alert(
        "There was an issue with your payment. Please make sure you use the provided credit card."
      )
    });
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

const mapDispatchToProps = dispatch => ({
  checkOutSuccess: () => dispatch(checkOutSuccess())
})

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);