import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  constructor() {
    super();
    
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete(todoId) {
    this.props.deleteItem(todoId);
  }

  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
          { this.props.todos.map(todo => ( <TodoItem key={ todo.id } item={ todo } onDelete={ this.onDelete } /> )) }
        </ul>
      </section>
    );
  }
}

export default TodoList;
