import React from 'react';
import Desserts from './components/Desserts';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h2">
          Robot demonstration
        </Typography>
      </header>
      <Desserts/>
    </div>
  );
}

export default App;
