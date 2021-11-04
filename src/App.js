import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Banner2 from './components/Banner2';
import Roadmap from './components/Roadmap';
import Banner3 from './components/Banner3';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Banner2 />
      <Roadmap />
      <Banner3 />
      <Footer />
    </div>
  );
}

export default App;
