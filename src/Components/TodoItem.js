import React, { Component } from 'react';

class TodoItem extends Component {
  
  render() {
    return (
      <li className="Todos">
        <b>{this.props.todo.title}</b>  
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: React.PropTypes.object
}

export default TodoItem;
