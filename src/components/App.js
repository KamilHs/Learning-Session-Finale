import React from 'react';
import { connect } from 'react-redux';
import { addButtonPressed, inputValueChange, todoStatusChange } from '../actions';

import '../style/main.css';


class App extends React.Component {

    handleChangeInput(text) {
        this.props.inputValueChange(text);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addButtonPressed(this.props.inputText);
    }

    changeStatus(index) {
        this.props.todoStatusChange(index);
    }


    render() {
        let mustDoTodos = [];
        let doneTodos = [];
        if (this.props.todos !== undefined) {
            mustDoTodos = this.props.todos.filter(todo => todo.done !== true);
            doneTodos = this.props.todos.filter(todo => todo.done === true);
        }        

        return (
            <div className="main-container">
                <h1>TODO List</h1>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type="text"
                        value={this.props.inputText}
                        onChange={(e) => this.handleChangeInput(e.target.value)}
                    />
                    <button onClick={(e) => this.handleSubmit(e)}>Add</button>
                </form>
                <div className="todos-container">
                    {mustDoTodos.length !== 0 ?
                        mustDoTodos.map((todo, index) => (
                            <div key={index} className="todo">
                                <input
                                    onClick={(e) => this.changeStatus(index)}
                                    type="checkbox"
                                />
                                <p>{todo.title}</p>
                            </div>
                        ))
                        :
                        <div></div>
                    }
                    {doneTodos.length !== 0 ? <h2>Done</h2> : <div></div>}
                    {
                        doneTodos.length !== 0 ?
                            doneTodos.map((todo, index) => (
                                <div key={index} className="todo">
                                    <input
                                        onClick={(e) => this.changeStatus(index)}
                                        type="checkbox"
                                        checked={todo.done}
                                    />
                                    <p>{todo.title}</p>
                                </div>
                            ))
                            :
                            <div></div>
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return {
        todos: state.AddTodo,
        inputText: state.InputChange,
    }
}

export default connect(mapStateToProps, {
    addButtonPressed,
    inputValueChange,
    todoStatusChange
})(App)
