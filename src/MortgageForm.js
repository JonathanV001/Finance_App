import React from 'react';
import { useContext } from 'react';
import paymentContext from './context/DataContext'

const MortgageForm = () => {
    const {setInterest, setLoanAmount,
        setLoanTermMortgage, setDownPaymentMortgage } = useContext(paymentContext);

  return (
    <div className='form'>
      <label htmlFor='loanAmount'>Loan Amount</label>
      <input type='number' id='loanAmount' onChange={(e) => (setLoanAmount(e.target.value))}/>
      <label htmlFor='downPayment'>Down Payment</label>
      <input type='number' id='downPayment' onChange={(e) => (setDownPaymentMortgage(e.target.value))}/>
      <label htmlFor='term'>Term</label>
      <select id = 'term' onChange={(e) => setLoanTermMortgage(e.target[e.target.selectedIndex].value)}>
        <option value='30'> 30-yr fixed</option>
        <option value='20'> 20-yr fixed</option>
        <option value='15'> 15-yr fixed</option>
      </select>
      <label htmlFor='interest'>Interest %</label>
      <input type='number' id='interest' onChange={(e) => (setInterest(e.target.value))}/>
    </div>
  );
}

export default MortgageForm;
