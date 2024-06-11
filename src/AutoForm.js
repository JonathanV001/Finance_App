import React from 'react';
import { useContext } from 'react';
import paymentContext from './context/DataContext'

const AutoForm = () => {
  const { setVehiclePrice,
          setDownPayment, setTradeInValue,
          setApr,setLoanTerm } = useContext(paymentContext);
  return (
    <div className='form'>
      <label htmlFor='vehiclePrice'>Vehicle Price</label>
      <input type='number' id ="vehiclePrice" onChange={(e) => setVehiclePrice(e.target.value)}/>

      <label htmlFor='downPayment'>Down Payment</label>
      <input type='number' id ="downPayment" onChange={(e) => setDownPayment(e.target.value)}/>

      <label htmlFor='tradeInValue'>Trade-In Value</label>
      <input type='number' id ="tradeInValue" onChange={(e) => setTradeInValue(e.target.value)}/>

      {/* Fix undefined bug for select */}
      <label htmlFor='creditScore'>Credit Score</label>
      <select id ="creditScore" onChange={(e) => setApr(e.target[e.target.selectedIndex].value)}>
        <option value='.0685'>Excellent (720-850)</option>
        <option value='.0685' >Good (660-719)</option>
        <option value='.1238'>Average (600-659)</option>
        <option value='.1646'>Below Average (300-599)</option>
      </select>

      <label htmlFor='loanTerm'>Loan Term</label>
      <select id ="loanTerm" onChange={(e) => setLoanTerm(e.target[e.target.selectedIndex].value)}>
        {/* default optrion is none but program needs to set options at load */}
        <option value = '72'>72 Months</option>
        <option value='60'>60 Months</option>
        <option value='48'>48 Months</option>
        <option value='36'>36 Months</option>
      </select>
    </div>
  );
}

export default AutoForm;
