import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import uuid from 'uuid/v4';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {
          id: uuid(),
          todo: 'Taste JavaScript',
          done: true
        },
        {
          id: uuid(),
          todo: 'Buy a unicorn',
          done: false
        }
      ]
    };

    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(newTodo) {
    this.setState({ todos: this.state.todos.concat({ id: uuid(), todo: newTodo, done: false }) });
  }

  deleteTodo(todoId) {
    let idx = this.state.todos.findIndex(item => item.id === todoId);
    this.setState({ todos: [].concat(this.state.todos.slice(0, idx), this.state.todos.slice(idx + 1)) });
  }

  render() {
    return (
      <div className="main-app">
        <section className="todoapp">

          <Header addTodoCallback={ this.addTodo } />

          <TodoList todos={ this.state.todos } deleteItem={ this.deleteTodo } />

          <footer className="footer">
            <span className="todo-count"><strong>{ this.state.todos.filter(todo => !todo.done).length }</strong> item left</span>
            <ul className="filters">
              <li>
                <a className="selected" href="#/">All</a>
              </li>
              <li>
                <a href="#/active">Active</a>
              </li>
              <li>
                <a href="#/completed">Completed</a>
              </li>
            </ul>
            <button className="clear-completed">Clear completed</button>
          </footer>
        </section>

        <footer className="info">
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.getElementsByTagName('main')[0]
);
