import './App.css';
import Nav from './Nav';
import AutoForm from './AutoForm';
import AutoDetails from './AutoDetails';
import MortgageForm from './MortgageForm';
import MortgageDetails from './MortgageDetails';
import AutoInformation from './AutoInformation';
import MortgageInformation from './MortgageInformation';
import { Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <DataProvider>
    <div className="App">
          <Nav />
          <Routes>
            {/* maybe route to '/' */}
            <Route path = '/' element={<div className='formAndDetailsContainer'><AutoForm/><AutoDetails/><AutoInformation/></div>}/>
            <Route path = '/mortgage' element={<div className='formAndDetailsContainer'><MortgageForm /><MortgageDetails /><MortgageInformation/></div>} />
          </Routes>
    </div>
    </DataProvider>
  );
}

export default App;
