import React from 'react';
import { useContext, useEffect } from 'react';
import paymentContext from './context/DataContext'

const MortgageDetails = () => {
  const { mortgageMonthlyPayment, loanAmount, downPaymentMortgage, setMortgageMonthlyPayment, interest, loanTermMortgage} = useContext(paymentContext);

  useEffect(() => {
      let monthlyInterest = (parseFloat(interest) * .01 ) / 12;

      let monthlyPayment = 
      (parseFloat(loanAmount) - parseFloat(downPaymentMortgage)) *
      ((monthlyInterest*(1 + monthlyInterest)*parseFloat(loanTermMortgage)) / ((1 + monthlyInterest)*(parseFloat(loanTermMortgage) - 1)))

      setMortgageMonthlyPayment((monthlyPayment).toFixed(2));
  }, [interest, loanAmount, downPaymentMortgage, loanTermMortgage, setMortgageMonthlyPayment]);

  return (
    <div className='paymentDisplay'>
      <div className='paymentLeftDiv'>
        <h1>Monthly Payment</h1>
        <h1>{isNaN(mortgageMonthlyPayment) ? 'Please fill form' : "$" + mortgageMonthlyPayment}</h1>
      </div>
      <div className='paymentRightDiv'>
        <p>Loan Amount</p>
        <p className='colorGreen'>${loanAmount}</p>
        <p>Down Payment</p>
        <p className='colorGreen'>${downPaymentMortgage}</p>
        <p>Total</p>
        <p className='colorGreen'>${parseFloat(loanAmount) - parseFloat(downPaymentMortgage)}</p>
      </div>
    </div>
  );
}

export default MortgageDetails;
