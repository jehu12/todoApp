import React, {Component} from 'react'

class AddTodo extends Component{
    state = {
        content: null
    }
    iChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    iSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state)
        e.target.reset()
    }
    render(){
        return(
            <div className="todo-list container">
                <form onSubmit={this.iSubmit}>
                    <label>Add New Todo:</label>
                    <input type="text" onChange={this.iChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo