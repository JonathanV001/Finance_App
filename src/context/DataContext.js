import { createContext, useState } from 'react';

const paymentContext = createContext({});

export const DataProvider = ({ children }) => {
    /* For Auto */
    const[vehiclePrice, setVehiclePrice] = useState('0');
    const[downPayment, setDownPayment] = useState('0');
    const[tradeInValue, setTradeInValue] = useState('0');
    const[estimatedFees, setEstimatedFees] = useState('0');
    const[loanTerm, setLoanTerm] = useState('72');
    const[total, setTotal] = useState('0');
    const[apr, setApr] = useState('.0685');
    const[monthlyPayment, setMonthlyPayment] = useState('0');

    /* For Mortgage */
    const[interest, setInterest] = useState('7');
    const[loanAmount, setLoanAmount] = useState('0');
    const[loanTermMortgage, setLoanTermMortgage] = useState('30');
    const[mortgageMonthlyPayment, setMortgageMonthlyPayment] = useState('0');
    const[downPaymentMortgage, setDownPaymentMortgage] = useState('0');

    /* For Nav Bar */
    const[toggle, setToggle] = useState('0');
    const[class1, setClass1] = useState("navButtonBlack");
    const[class2, setClass2] = useState("navButtonWhite");
    const[text1, setText1] = useState("whiteText");
    const[text2, setText2] = useState("blackText");

    return(
        <paymentContext.Provider value={{
            vehiclePrice, setVehiclePrice, downPayment, setDownPayment, 
            tradeInValue, total, setTradeInValue, estimatedFees, 
            setEstimatedFees, loanTerm, setLoanTerm, setTotal, 
            apr, setApr, monthlyPayment, setMonthlyPayment,

            interest, setInterest, loanAmount, setLoanAmount,
            loanTermMortgage, setLoanTermMortgage, mortgageMonthlyPayment, setMortgageMonthlyPayment,
            downPaymentMortgage, setDownPaymentMortgage,

            toggle, setToggle, class1, setClass1, 
            class2, setClass2, text1, setText1, text2, 
            setText2
        }}>
            {children}
        </paymentContext.Provider>
    )

};

export default paymentContext;

