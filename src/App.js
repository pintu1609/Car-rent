
import './App.css';

import Navbar from './container/Navbar';
import Page from './container/Page';
import Vehicle from './container/Vehicle';
import {BrowserRouter as Router 
} from  'react-router-dom';
import { useState } from 'react';



function App() {
  const [currentPage, setCurrentPage]= useState(1);
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="App">
      <Router>

      <Navbar setSearchValue={setSearchValue}/>
      <Vehicle currentPage={currentPage} searchValue={searchValue}/>
     <Page totalItems={25} currentPage={currentPage} onPageChange={setCurrentPage} />
      </Router>
    </div>
  );
}

export default App;
