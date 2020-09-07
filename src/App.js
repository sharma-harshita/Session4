import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import createTodo from'./redux/actions/todoActions'

class App extends Component{
  constructor(){
    super()
    this.state={
      value:""
    }
  }

  handleChange = (event)=>{
    this.setState({value:event.target.value})
  }

  handleSubmit = (event )=>{
    event.preventDefault();
    this.setState({value:""})
    this.props.createTodo(this.state.value)
  }
  render(){
    return(
      <div className="App">
        <h1>TO-DO Application</h1>
        <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} value={this.state.value} />
            <input type= "submit"/>
        </form>
        {this.props.todoList.map((value, index)=>{
          console.log(this.props);
          return(
            <div key={index}>
              {value.name}
              </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps)=>{
  return{
    todoList: state.todos
  }
}

const mapDispatchToProps =( dispatch )=>{
  return{
    createTodo : todo => dispatch(createTodo(todo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
