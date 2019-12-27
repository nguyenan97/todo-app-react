import React, { Component } from 'react';
import './App.css';

class App extends Component() {

  state = {
    todoList: []
  }

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid py-2">
          <div className="container">
            <h1 className="display-2">Todos App</h1>
          </div>
        </div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <input type="text" name="todoTask" className="form-control" placeholder="Please enter your task" autoComplete="off" />
            <div className="input-group-append">
              <button type="submit" className="btn btn-outline-success">Add</button>
            </div>
          </div>
        </form>
      </div>

    );
  }
  handleSubmit = (event) => {
    var taskDesc = event.target.elements.todoTask.value;
    if (taskDesc.lenght > 0) {
      this.setState({
        todoList: [...this.todoList, taskDesc]
      })
      event.target.reset();
    }
    event.preventDefault();
  }
}

export default App;
