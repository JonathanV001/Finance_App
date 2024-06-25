import React, { useContext, useEffect } from 'react';
import paymentContext from './context/DataContext';

const AutoDetails = () => {
  const { vehiclePrice, downPayment, tradeInValue, estimatedFees, 
    total, monthlyPayment, setEstimatedFees, setTotal, setMonthlyPayment, apr, loanTerm} = useContext(paymentContext)

  //remove , from number
  const parseNumber = (number) => {
    let newNumber = number.toString().replace(/,/gi, "");
    newNumber = parseFloat(newNumber)
    return newNumber
  }

  /*tax effect*/
  useEffect(() => {
    if(isNaN(parseNumber(vehiclePrice))){
      let taxRounded = "0";
      setEstimatedFees(taxRounded);
    }else{
      let tax = parseNumber(vehiclePrice) * 0.03;
      let taxRounded = tax.toFixed(2);
      let taxWithCommas = parseFloat(taxRounded).toLocaleString();
      setEstimatedFees(taxWithCommas);
    }
  }, [vehiclePrice, setEstimatedFees]);

  /*total price effect*/
  useEffect(() => {
    let total = parseNumber(vehiclePrice) - parseNumber(downPayment) - 
    parseNumber(tradeInValue) + parseNumber(estimatedFees);
    let totalWithCommas = parseFloat(total).toLocaleString();
    setTotal(totalWithCommas);
  }, [vehiclePrice, downPayment, tradeInValue, estimatedFees, setTotal]);

  /*montlhy payment effect*/
  useEffect(() => {

    let principle = parseNumber(total) - parseNumber(estimatedFees);

    let monthlyApr = apr / 12;

    let monthlyCost = 
    (principle*(monthlyApr)) /
    (1 - (1 + (monthlyApr))**(-parseNumber(loanTerm)));

   let monthlyPaymentRounded = monthlyCost.toFixed(2);
   let monthlyPaymentWithCommas = parseFloat(monthlyPaymentRounded).toLocaleString();
    setMonthlyPayment(monthlyPaymentWithCommas);
  } ,[total, estimatedFees, apr, loanTerm, setMonthlyPayment])

  return (
    <div className='paymentDisplay'>
      <div className='paymentLeftDiv'>
        <h1>Monthly Payment</h1>
        <h1>{"$" + monthlyPayment}</h1>
      </div>
      <div className='paymentRightDiv'>
        <p>Vehicle Budget</p><p className='colorGreen'>${vehiclePrice}</p>
        <p>Down Payment</p><p className='colorGreen'>${downPayment}</p>
        <p>Trade-In Value</p><p className='colorGreen'>${tradeInValue}</p>
        <p>Estimated tax, title and registration</p><p>${estimatedFees}</p>
        <p>Total</p><p className='colorGreen'>{"$" + total}</p>
      </div>
    </div>
  );
}

export default AutoDetails;
