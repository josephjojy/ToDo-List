import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{

state={
  i:1,
  todos:[
    
  ]
}
chechtodo =(id) =>{
  const todos = this.state.todos.filter(todo =>{
    return todo.id!==id;
  });
  this.setState({
    todos
  })
}

addTodo = (todo) => {
  todo.id=this.state.i;
  let i = todo.id + 1;
  let todos = [...this.state.todos,todo];
  this.setState({
    i,
    todos
  })

}

  render(){
    return (
      <div className="App">
        <h1>Todo List</h1>
        <Todos todos={this.state.todos} checktodo={this.chechtodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App