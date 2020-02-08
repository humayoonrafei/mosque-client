import React from 'react';
import './App.css';
import { createRoutes } from './helpers/createRoutes';

const App: React.FC = () => {
  return (
    <div className="App">
      {createRoutes()}
    </div>
  );
};



export default App;
