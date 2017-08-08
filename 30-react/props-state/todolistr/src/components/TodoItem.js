import React from 'react'


class TodoItem extends React.Component {
  render() {
    return (

        <div className="item">
          <p>{this.props.item}<i onClick={this.handleClick} className="remove circle icon"></i></p>
        </div>

    )
  }
}




export default TodoItem
