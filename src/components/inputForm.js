
// const Todo = import('./Todo.js');
// import { Todo } from './Todo';

'use strict';

const e = React.createElement;

const Todo = props => {
    let timestamp = new Date();
    console.log(timestamp.toDateString());

    return (
        <tr>
        <th scope="row">1</th>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{timestamp.toString()}</td>
        <td> <button>Mark as completed</button> </td>
      </tr>
    )
}

const inputForm = () => {

    const [curInput, inputChange] = React.useState({title: "", description: ""});

    const inputHandler = (event) => {
        // same destructuring event as es6 class
        const { name, value } = event.target;
        // update state by spreading in the previous state history & key value pair...
        return inputChange({...curInput, [name]: value});
    }

    const addTodo = () => {

        let target = document.querySelector('#todos');
        let newTodo = e(Todo, {title: curInput.title, description: curInput.description});
        ReactDOM.render(newTodo, target);
        // pass props into the new instance of todo comonent then render.
    }

    return (
        <div className="todo-container__new-todo-container">
            <input onChange={inputHandler} name="title" type="text" placeholder="enter todo title" />
            <input onChange={inputHandler} name="description" type="text" placeholder="add description here" />

            <button className="btn" onClick={addTodo}>Create</button>
        </div>
    );
}

const htmlEl = document.querySelector('#todo-form');
ReactDOM.render(e(inputForm), htmlEl);
