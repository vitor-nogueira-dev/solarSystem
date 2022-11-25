import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import './App.css';
import SolarSystem from './components/SolarSystem';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </>
    );
  }
}

export default App;
