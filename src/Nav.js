import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import paymentContext from './context/DataContext';

const Nav = () => {
  const { toggle, setToggle, class1, setClass1, 
    class2, setClass2, text1, setText1, text2, 
    setText2 } = useContext(paymentContext);

  useEffect(() => {
    if(toggle == '0'){
        setClass1("navButtonBlack");
        setClass2("navButtonWhite");

        setText1("whiteText");
        setText2("blackText");
    }else if(toggle == '1'){
      setClass1("navButtonWhite");
      setClass2("navButtonBlack");

      setText1("blackText");
      setText2("whiteText");
    }
  }, [toggle, setClass1, setClass2, setText1, setText2]);

  const toggle0 = () => {
    setToggle('0')
  }

  const toggle1 = () => {
    setToggle('1')
  }

  return (
    <div className='nav'>
        <div className={class1} onClick={toggle0}>
            <Link to='/' className='linkTag'> <p className={text1}>Auto</p> </Link>
        </div>
        <div className={class2} onClick={toggle1}>
            <Link to='/mortgage' className='linkTag'><p className={text2}>Mortgage</p></Link>
        </div>
    </div>
  );
}

export default Nav;
