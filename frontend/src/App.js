import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employee Resource Directory</h1>
        <p>Phase 1: Project setup and database schema created</p>
      </header>
      <main>
        <div className="setup-status">
          <h2>Setup Status</h2>
          <ul>
            <li>✓ React frontend initialized</li>
            <li>✓ Express backend initialized</li>
            <li>✓ MySQL database schema created</li>
            <li>✓ Seed data added (12 employees)</li>
            <li>✓ Self-referencing manager relationship configured</li>
            <li>→ Phase 2: CRUD endpoints coming next</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
