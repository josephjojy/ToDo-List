import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        content: ""
    }
    props :any;
    handleChange =(e:{target:HTMLInputElement}) => {
        this.setState({
            content : e.target.value
        })
    }
    handleSubmit =(e:any) =>{
        if(this.state.content!==""){
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:""
        })
    }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>

        )
    }
}

export default AddTodo
