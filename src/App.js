import React from 'react';
import './App.css';

import Home from './Components/AppComponents/Home';
import NavigationBar from './Components/AppComponents/Navbar';

function App() {
  return (
    <>
      <NavigationBar />
      <div>
        <Home />
      </div>
    </>
  );
}

export default App;
