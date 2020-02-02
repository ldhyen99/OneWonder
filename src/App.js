import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Component/Navigation/Navigation'
import Header from './Component/Header/Header'
import Contain from './Component/Contain/Contain'
import Footer from './Component/Footer/Footer'
import ContainList from './Component/Contain/ContainList';


function App() {
  return (
    <div className="App">
     <Navigation/>

     <Header/>
     <ContainList/>
     <Footer/>
    </div>

  );
}

export default App;
