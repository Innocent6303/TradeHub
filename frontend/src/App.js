import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      
      <Header />
      <div>This is a basic example .</div>
      <Footer />
      <div className="bg-blue-500 text-white p-4">
        This is a Footer section 
      </div>
      <div className="bg-yellow-500 text-blue">
        hello
      </div>
    </div>
  );
}

export default App;
