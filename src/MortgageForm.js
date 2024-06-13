import React from 'react';
import { useContext } from 'react';
import paymentContext from './context/DataContext'

const MortgageForm = () => {
    const {setInterest, setLoanAmount,
        setLoanTermMortgage, setDownPaymentMortgage } = useContext(paymentContext);

    const checkInputRange = (e) => {
    if(e.target.value > 1000000000){
      e.target.value = 1000000000;
    }else if(e.target.value < 0){
      e.target.value = "";
    }
  }

    const checkInputRangeInterest = (e) => {
      if(e.target.value > 100){
        e.target.value = 100;
      }else if(e.target.value < 0){
        e.target.value = "";
      }
    }

  return (
    <div className='form'>
      <label htmlFor='loanAmount'>Loan Amount</label>
      <input type='number' id='loanAmount' placeholder = '0' onKeyUp={(e) => checkInputRange(e)}
      onChange={(e) => e.target.value === '' ? setLoanAmount('0') : 
        parseFloat(e.target.value) > 1000000000 ? setLoanAmount("1000000000") :
        parseFloat(e.target.value) < 0 ? setLoanAmount("0"):
        setLoanAmount(e.target.value)}/>

      <label htmlFor='downPayment'>Down Payment</label>
      <input type='number' id='downPayment' placeholder = '0' onKeyUp={(e) => checkInputRange(e)}
      onChange={(e) => e.target.value === '' ? setDownPaymentMortgage('0') : 
        parseFloat(e.target.value) > 1000000000 ? setDownPaymentMortgage("1000000000") :
        parseFloat(e.target.value) < 0 ? setDownPaymentMortgage("0"):
        setDownPaymentMortgage(e.target.value)}/>

      <label htmlFor='term'>Term</label>
      <select id = 'term' onChange={(e) => setLoanTermMortgage(e.target[e.target.selectedIndex].value)}>
        <option value='30'> 30-yr fixed</option>
        <option value='20'> 20-yr fixed</option>
        <option value='15'> 15-yr fixed</option>
      </select>

      <label htmlFor='interest'>Interest %</label>
      <input type='number' id='interest' placeholder='0' onKeyUp={(e) => checkInputRangeInterest(e)}
      onChange={(e) => e.target.value === '' ? setInterest('0') : 
        parseFloat(e.target.value) > 100 ? setInterest("100") :
        parseFloat(e.target.value) < 0 ? setInterest("0"):
        setInterest(e.target.value)}/>
    </div>
  );
}

export default MortgageForm;
