import React from 'react';
import { useContext } from 'react';
import paymentContext from './context/DataContext'

const AutoForm = () => {
  const { setVehiclePrice, setDownPayment, setTradeInValue,
          setApr,setLoanTerm,
        
          vehiclePrice, downPayment, tradeInValue,
          loanTerm, apr} = useContext(paymentContext);

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
      <label htmlFor='vehiclePrice'>Vehicle Price</label>
      <input type='text' id ="vehiclePrice" placeholder="0" autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 1000000 ? setVehiclePrice("1,000,000") :
        parseNumber(e.target.value) < 0 ? setVehiclePrice("0"):
        // parseNumber then add commas back every onChange
        setVehiclePrice(parseNumber(e.target.value).toLocaleString())}
        value={vehiclePrice} required/>

      <label htmlFor='downPayment'>Down Payment</label>
      <input type='text' id ="downPayment" placeholder="0" autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 1000000 ? setDownPayment("1,000,000") :
        parseNumber(e.target.value) < 0 ? setDownPayment("0"):
        setDownPayment(parseNumber(e.target.value).toLocaleString())}
        value={downPayment} required/>

      <label htmlFor='tradeInValue'>Trade-In Value</label>
      <input type='text' id ="tradeInValue" placeholder="0" autoComplete='off'
      onChange={(e) => 
        parseNumber(e.target.value) > 1000000 ? setTradeInValue("1,000,000") :
        parseNumber(e.target.value) < 0 ? setTradeInValue("0"):
        setTradeInValue(parseNumber(e.target.value).toLocaleString())}
        value={tradeInValue} required/>

      {/* Fix undefined bug for select */}
      <label htmlFor='creditScore'>Credit Score</label>
      <select id ="creditScore" onChange={(e) => setApr((e.target[e.target.selectedIndex].value).toLocaleString())} 
      value={apr}>
        <option value='.0685'>Excellent (720-850)</option>
        <option value='.0909' >Good (660-719)</option>
        <option value='.1238'>Average (600-659)</option>
        <option value='.1646'>Below Average (300-599)</option>
      </select>

      <label htmlFor='loanTerm'>Loan Term</label>
      <select id ="loanTerm" onChange={(e) => setLoanTerm((e.target[e.target.selectedIndex].value).toLocaleString())} 
      value={loanTerm}>
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
