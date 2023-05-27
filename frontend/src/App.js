import React from 'react';
import { Navbar, Hero, Products, Deals, Trending, Footer } from "./components";

import './App.css';

const App = () => {
  return (
    <div className="bg-[#232f3e]">
      <Navbar />
      {/* <Add /> */}
      <Hero />
      <Products />
      <Deals />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
