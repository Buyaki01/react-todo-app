import React, { Component } from "react"

class InputTodo extends Component {
  state = {
    title: "",
    email: "",
  };
  
  onChange = e => {
    this.setState({    
      [e.target.name]: e.target.value 
    });
  };

  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Add Todo..." 
          name="title" 
          value={this.state.title} 
          onChange={this.onChange} 
        />

        <input 
          name='email'
          placeholder='Email' 
          value = {this.state.email}
          onChange={this.onChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo