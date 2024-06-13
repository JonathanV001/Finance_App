import React, { useContext, useEffect } from 'react';
import paymentContext from './context/DataContext';

const AutoDetails = () => {
  const { vehiclePrice, downPayment, tradeInValue, estimatedFees, 
    total, monthlyPayment, setEstimatedFees, setTotal, setMonthlyPayment, apr, loanTerm} = useContext(paymentContext)

  /*tax effect*/
  useEffect(() => {
    if(isNaN(parseInt(vehiclePrice))){
      let taxRounded = "0";
      setEstimatedFees(taxRounded);
    }else{
      let tax = parseFloat(vehiclePrice) * 0.03;
      let taxRounded = tax.toFixed(2);
      setEstimatedFees(taxRounded);
    }
  }, [vehiclePrice, setEstimatedFees]);

  /*total price effect*/
  useEffect(() => {
    let total = parseFloat(vehiclePrice) - parseFloat(downPayment) - 
    parseFloat(tradeInValue) + parseFloat(estimatedFees);
    setTotal(total);
  }, [vehiclePrice, downPayment, tradeInValue, estimatedFees, setTotal]);

  /*montlhy payment effect*/
  useEffect(() => {

    let principle = parseFloat(total) - parseFloat(estimatedFees);

    let monthlyApr = apr / 12;

    let monthlyPayment = 
    (principle*(monthlyApr)) /
    (1 - (1 + (monthlyApr))**(-parseFloat(loanTerm)));

   let monthlyPaymentRounded = monthlyPayment.toFixed(2);

    setMonthlyPayment(monthlyPaymentRounded);
  } ,[total, estimatedFees, apr, loanTerm, setMonthlyPayment])

  return (
    <div className='paymentDisplay'>
      <div className='paymentLeftDiv'>
        <h1>Monthly Payment</h1>
        <h1>{isNaN(monthlyPayment) ? 'Please fill form' : "$" + monthlyPayment}</h1>
      </div>
      <div className='paymentRightDiv'>
        <p>Vehicle Budget</p><p className='colorGreen'>${vehiclePrice}</p>
        <p>Down Payment</p><p className='colorGreen'>${downPayment}</p>
        <p>Trade-In Value</p><p className='colorGreen'>${tradeInValue}</p>
        <p>Estimated tax, title and registration</p><p>${estimatedFees}</p>
        <p>Total</p><p className='colorGreen'>${total}</p>
      </div>
    </div>
  );
}

export default AutoDetails;
