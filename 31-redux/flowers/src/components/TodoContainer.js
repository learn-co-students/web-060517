import React from 'react'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { removeTodo } from '../actions/todos'


class TodoContainer extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <TodoList remove={this.props.remove} todos={this.props.tasks}/>
      </div>
    )
  }
}




/// THIS FUNCTION IS OUTSIDE OF OUR COMPONENT

function mapStateToProps(state) {
  return {
    tasks: state.todos
  }
}


function mapDispatchToProps(dispatch) {

  return {
    remove: (todo) => {
      dispatch(removeTodo(todo))
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer)
