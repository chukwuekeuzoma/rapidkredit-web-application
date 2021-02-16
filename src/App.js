// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navigation from "./Components/Navigation/Navigation"
import BodyOne from "./Components/BodyOne/BodyOne"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
   <>
      <Navigation/>
      <BodyOne/>

   </>

  );
}

export default App;
