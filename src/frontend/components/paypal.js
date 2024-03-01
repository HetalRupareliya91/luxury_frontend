import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";

// This value is from the props in the UI
const style = {"layout":"vertical"};

function createOrder() {
  // replace this url with your server
  return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/create-order", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
          cart: [
              {
                  sku: "1blwyeo8",
                  quantity: 1,
                  plan_id: 'P-7UD066132C2640912MWOSFGA',
              },
          ],
      }),
  })
      .then((response) => response.json())
      .then((order) => {
        console.log("Order ID:", order.id);
          return order.id;
      });
}
function onApprove(data) {
  // replace this url with your server
  return fetch("https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          orderID: data.orderID,
      }),
  })
      .then((response) => response.json())
      .then((orderData) => {
        console.log("Order Data:", orderData);
       
      });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
      <>
          { (showSpinner && isPending) && <div className="spinner" /> }
          <PayPalButtons
              style={style}
              disabled={false}
              forceReRender={[style]}
              fundingSource={undefined}
              createOrder={createOrder}
              onApprove={onApprove}
          />
      </>
  );
}

export default function PayPalButton() {
  return (
      <div style={{ maxWidth: "750px", minHeight: "100px" }}>
          <PayPalScriptProvider options={{ clientId:"AbfUEgpypFo0_JbFzpAQ6E4X4KRZIyiVGq-DJxctcQffUmkmgrhfwamDtDG60RXLUrccX7I2G2_dHIWQ", components: "buttons", currency: "USD" }}>
              <ButtonWrapper showSpinner={false} />
          </PayPalScriptProvider>
      </div>
  );
}