import React, {Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'
import Done from './Done';

class App extends Component{

state={
  i:1,
  todos:[],
  done:[]
}
checktodo =(Todo:any) =>{
  const todos = this.state.todos.filter((todo:any) =>{
    return todo.id!==Todo.id;
  });
  const done =[...this.state.done,Todo];
  this.setState({
    todos,
    done
  })
}

addTodo = (todo:any) => {
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
        <h3><Todos todos={this.state.todos} checktodo={this.checktodo}/></h3>
        <AddTodo addTodo={this.addTodo} />
        <h1>Done List</h1>
        <h3><Done done={this.state.done}/></h3>
      </div>
    );
  }
}
export default App