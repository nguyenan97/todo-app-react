import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid py-2">
        <div className="container">
          <h1 className="display-2">Todos App</h1>
        </div>
      </div>
      <form className="mb-3">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Please enter your task" autoComplete="off" />
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-success"></button>
          </div>
        </div>
      </form>
    </div>

  );
}

export default App;
