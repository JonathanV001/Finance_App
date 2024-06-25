import React from 'react';
import { useContext } from 'react';
import paymentContext from './context/DataContext'

const MortgageForm = () => {
    const {setInterest, setLoanAmount,
        setLoanTermMortgage, setDownPaymentMortgage, loanAmount, 
        downPaymentMortgage, interest, loanTermMortgage} = useContext(paymentContext);

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

  return (
    <div className='form'>
      <label htmlFor='loanAmount'>Loan Amount</label>
      <input type='text' id='loanAmount' placeholder = '0' autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 1000000000 ? setLoanAmount("1,000,000,000") :
        parseNumber(e.target.value) < 0 ? setLoanAmount("0"):
        setLoanAmount(parseNumber(e.target.value).toLocaleString())} value={loanAmount} required/>

      <label htmlFor='downPayment'>Down Payment</label>
      <input type='text' id='downPayment' placeholder = '0' autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 1000000000 ? setDownPaymentMortgage("1,000,000,000") :
        parseNumber(e.target.value) < 0 ? setDownPaymentMortgage("0"):
        setDownPaymentMortgage(parseNumber(e.target.value).toLocaleString())}
        value={downPaymentMortgage} required/>

      <label htmlFor='term'>Term</label>
      <select id = 'term' onChange={(e) => setLoanTermMortgage(e.target[e.target.selectedIndex].value)} value={loanTermMortgage}>
        <option value='30'> 30-yr fixed</option>
        <option value='20'> 20-yr fixed</option>
        <option value='15'> 15-yr fixed</option>
      </select>

      <label htmlFor='interest'>Interest %</label>
      <input type='text' id='interest' placeholder='0' autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 100 ? setInterest("100") :
        parseNumber(e.target.value) < 0 ? setInterest("0"):
        setInterest(e.target.value)}
        value={interest} required/>
    </div>
  );
}

export default MortgageForm;
