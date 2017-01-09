import React from 'react';

class DoneToggle extends React.Component {
  constructor() {
    super();

    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone() {
    this.props.item.done = this.checkbox.checked;
    this.props.updated();
  }

  render() {
    return (
      <span>
        <input className="toggle" type="checkbox" checked={ this.props.item.done } ref={ checkbox => this.checkbox = checkbox } onChange={ this.toggleDone } />
        <label>{ this.props.item.todo }</label>
      </span>
    );
  }
}

export default DoneToggle;
