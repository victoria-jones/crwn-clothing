import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51Ixz1uHOiLgyipk2B4Awi66uL98RfsdKZ6oC3q7uwbEDHKh6N7va6Db5R8e6HOGYhAliLA8eGi0KicmfQUchLcjq00zifui4Ne';
    
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;