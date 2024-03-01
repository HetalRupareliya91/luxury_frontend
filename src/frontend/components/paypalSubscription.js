import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalSubscriptionButton = () => {
  const createSubscription = (data, actions) => {
    return actions.subscription.create({
      'plan_id': 'P-7UD066132C2640912MWOSFGA', // Replace with your actual plan ID
    });
  };

  const onApprove = (data, actions) => {
    return actions.subscription.get().then(function(subscriptionData) {
      // Successful subscription!
      console.log('Subscription result', subscriptionData, JSON.stringify(subscriptionData, null, 2));
    });
  };

  const onCancel = (data) => {
    // Show a cancel page, or return to cart
    alert("Subscription canceled or an error occurred. Please try again later.");
  };

  const onError = (err) => {
    // For example, redirect to a specific error page
    // window.location.href = "/your-error-page-here";
    alert("There is an error with the subscription. Please try again later.");
  };

  return (
    <PayPalButtons
      createSubscription={createSubscription}
      onApprove={onApprove}
      onCancel={onCancel}
      onError={onError}
    />
  );
};

const PayPalSubscriptionButtons = () => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id": "AbfUEgpypFo0_JbFzpAQ6E4X4KRZIyiVGq-DJxctcQffUmkmgrhfwamDtDG60RXLUrccX7I2G2_dHIWQ", 
        "vault": true,
      }}
    >
      <div>
        {/* Your other components */}
        <PayPalSubscriptionButton />
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalSubscriptionButtons;
