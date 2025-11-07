import { useState, useEffect } from 'react';
import './App.css';
import TipCalculator from './components/TipCalculator';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <TipCalculator />
      <Footer />
    </div>
  );
}

export default App;