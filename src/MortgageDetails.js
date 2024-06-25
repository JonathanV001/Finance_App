import React from 'react';
import { useContext, useEffect } from 'react';
import paymentContext from './context/DataContext'

const MortgageDetails = () => {
  const { mortgageMonthlyPayment, loanAmount, downPaymentMortgage, setMortgageMonthlyPayment, interest, loanTermMortgage} = useContext(paymentContext);

   //remove , from number and prevent non numbers
   const parseNumber = (number) => {
    let newNumber = number.toString().replace(/,/gi, "");
    if(isNaN(parseFloat(newNumber))){
      return 0;
    }else{
    newNumber = parseFloat(newNumber)
    }
    return newNumber
  }


  useEffect(() => {
      let monthlyInterest = (parseNumber(interest) * .01 ) / 12;

      let monthlyPayment = 
      (parseNumber(loanAmount) - parseNumber(downPaymentMortgage)) *
      ((monthlyInterest*(1 + monthlyInterest)*parseNumber(loanTermMortgage)) / ((1 + monthlyInterest)*(parseNumber(loanTermMortgage) - 1)))

      let monthlyPaymentFloat = parseNumber((monthlyPayment).toFixed(2))

      setMortgageMonthlyPayment(monthlyPaymentFloat.toLocaleString());
  }, [interest, loanAmount, downPaymentMortgage, loanTermMortgage, setMortgageMonthlyPayment]);

  return (
    <div className='paymentDisplay'>
      <div className='paymentLeftDiv'>
        <h1>Monthly Payment</h1>
        <h1>{"$" + mortgageMonthlyPayment}</h1>
      </div>
      <div className='paymentRightDiv'>
        <p>Loan Amount</p>
        <p className='colorGreen'>${loanAmount}</p>
        <p>Down Payment</p>
        <p className='colorGreen'>${downPaymentMortgage}</p>
        <p>Total</p>
        <p className='colorGreen'>{ "$" + (parseNumber(loanAmount) - parseNumber(downPaymentMortgage))}</p>
      </div>
    </div>
  );
}

export default MortgageDetails;
