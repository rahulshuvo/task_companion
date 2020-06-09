import React from 'react';
import TrelloList from './TrelloList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello Youtube</h2>
        <TrelloList title='Todo'/>
      </header>
    </div>
  );
}

export default App;
