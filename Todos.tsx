import React from 'react'

const Todos = ({todos , checktodo}:any) =>{
    const todoList = todos.length ? (
        todos.map((todo:any) =>{
            return(
                <div key={todo.id}>
                    <span onClick={() => {checktodo(todo.id)}}>{todo.content}</span>    
                </div>
            )
        })
    ):(<p></p>);
    return(
        <div className="todos collection">
            {todoList}
        </div>    
    )
}

export default Todos