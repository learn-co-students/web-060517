import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todos'

class TodoSubmit extends React.Component {


  state = {
    todo: ""
  }


  handleChange = (event) => {

    this.setState({
      todo: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.add(this.state.todo)
  }

  render() {


    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.todo} onChange={this.handleChange}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return {
    /// some props => some dispatch
    add: (todo) => {

      dispatch(addTodo(todo))
    }
  }
}

export default connect(null, mapDispatchToProps)(TodoSubmit)
