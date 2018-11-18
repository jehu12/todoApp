import React, {Component} from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [

    ]
  }
  delTodo = (id) => {
    let todos = this.state.todos.filter(sample => {
      return sample.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (sample) => {
    sample.id = Math.floor(Math.random() * 100);
    console.log(sample.id)
    let todos = [ ...this.state.todos, sample ]
    this.setState({
      todos
    })
  }
  render(){
    return(
      <div className="App">
        <h1 className="center blue-text">Todo List</h1>
        <Todo delTodo={this.delTodo} todos={this.state.todos} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App