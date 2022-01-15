import React from 'react';
import data from './components/back/Data/data';
import Header from './components/front/Header/header';
import Router from './components/front/Route/routes';
import { BrowserRouter as Rounter } from 'react-router-dom';
const App = () => {
  const { productItems } = data;
   
  return (
    <div>
      <Rounter>
        <Header/>
        <Router
        productItems={productItems}
        />
      </Rounter>

    </div>
  )
}

export default App;