import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Banner2 from './components/Banner2';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Banner2 />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
