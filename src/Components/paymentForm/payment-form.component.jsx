import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PaymentFormContainer, FormContainer} from "./payment-form.styles";
import { useSelector } from "react-redux";
import { selectTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useState } from "react";
import Button from "../buttons/Button.component";

const PaymentForm = () => {
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);


  const stripe = useStripe();
  const elements = useElements();
  const cartTotal = useSelector(selectTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();
    
    if(!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true)

    const res = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type' : "application/json"
      },
      body: JSON.stringify({amount: cartTotal*100}),
    }).then((res) => res.json());

    const { pi: {client_secret}} = res;
    console.log(client_secret);

    
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {name : currentUser ? currentUser.displayName : 'guest'}
      }
    });

    setIsProcessingPayment(false)
    
    if(paymentResult.error) {
      console.log(paymentResult.error);
    }else if(paymentResult.paymentIntent.status === 'succeeded'){
      alert('succesful payment')
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>credit card payment: </h2>
        <CardElement />
        <Button isLoading={isProcessingPayment} buttonType='secondary'>Pay now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
