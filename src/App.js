import React from 'react';
import ContadorHM from './ContadorHM'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Homens e Mulheres</h1>
        <ContadorHM />
      </header>
    </div>
  );
}

export default App;
