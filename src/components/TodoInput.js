import React from 'react';

class TodoInput extends React.Component {
  constructor() {
    super();

    this.state = {
      newTodo: ''
    };

    this.updateState = this.updateState.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  updateState() {
    this.setState({ newTodo: this.input.value });
  }

  onKeyPress(evt) {
    if (evt.keyCode === 13) { // 13 === Enter
      this.props.onSubmit(this.state.newTodo);
      this.input.value = '';
      this.updateState();
    } else if (evt.keyCode === 27) { // 27 === Esc
      this.input.value = '';
      this.updateState();
    }
  }

  render() {
    return (
      <input className="new-todo" placeholder="What needs to be done?" autoFocus ref={ elem => this.input = elem } onInput={ this.updateState } onKeyUp={ this.onKeyPress } />
    );
  }
}

export default TodoInput;
