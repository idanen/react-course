import React from 'react';
import TodoInput from './TodoInput';

class Header extends React.Component {
  constructor() {
    super();

    this.submitted = this.submitted.bind(this);
  }

  submitted(newTodo) {
    this.props.addTodoCallback && this.props.addTodoCallback(newTodo);
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <TodoInput onSubmit={ this.submitted }/>
      </header>
    );
  }
}

export default Header;