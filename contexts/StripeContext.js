import React, { createContext, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
console.log("stripekey (which should start with pk) has the value:", stripeKey);

const dummyVar = process.env.NEXT_PUBLIC_DUMMY_TEST_VARIABLE;
console.log("Dummy test variable value:", dummyVar);

const stripePromise = loadStripe(stripeKey);

const StripeContext = createContext();

export const StripeProvider = ({ children }) => {
  return (
    <Elements stripe={stripePromise}>
      {children}
    </Elements>
  );
};

export const useStripe = () => useContext(StripeContext);

export default StripeContext;