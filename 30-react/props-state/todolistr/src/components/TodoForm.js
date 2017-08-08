import React from 'react'


class TodoForm extends React.Component {

  constructor() {
    super()
    this.state = {
      todo: ""
    }

    this.formSubmit = this.formSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  formSubmit(e) {
    e.preventDefault()
    console.log("Submmiting", this.state.todo)
    if (this.state.todo != "") {
      this.props.onSubmit(this.state.todo)
    }
    this.setState({ todo: ""})
  }


  handleInputChange(e) {
      this.setState({ todo: e.target.value})
  }


  render() {
    return (
      <div id="todo-form">
        <form className="ui form" onSubmit={this.formSubmit}>
          <div className="field">
            <input type="text" value={this.state.todo} className="form-control" onChange={this.handleInputChange}/><br/>
          </div>
          <button className="ui button" type="submit">Add Todo</button>
        </form>
      </div>
    )
  }
}

export default TodoForm
