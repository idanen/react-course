import React from 'react';
import DoneToggle from './DoneToggle';

class TodoItem extends React.Component {
  constructor() {
    super();

    this.callDelete = this.callDelete.bind(this);
    this.itemUpdated = this.itemUpdated.bind(this);
  }

  callDelete() {
    this.props.onDelete(this.props.item.id);
  }

  itemUpdated() {
    this.forceUpdate();
  }

  render() {
    let completeClass = this.props.item.done ? 'completed': '';
    return (
      <li className={ completeClass }>
        <div className="view">
          <DoneToggle item={ this.props.item } updated={ this.itemUpdated } />
          <button className="destroy" onClick={ this.callDelete }></button>
        </div>
        <input className="edit" defaultValue="Create a TodoMVC template" />
      </li>

      // <li>
      //   <div className="view">
      //     <input className="toggle" type="checkbox" />
      //     <label>Buy a unicorn</label>
      //     <button className="destroy"></button>
      //   </div>
      //   <input className="edit" defaultValue="Rule the web" />
      // </li>
    );
  }
}

export default TodoItem;
