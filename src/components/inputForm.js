const { createElement, useState } = React;
const { render } = ReactDOM;

'use strict';


const Todo = props => {

    let timestamp = new Date();

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
const Button = props => {
    return (
        <button>{props.name}</button>
    )
}
const inputForm = () => {

    const [curState, changeState] = useState({ title: "", description: ""});
    const [todosArr, updateArr] = useState([]);
    const inputHandler = (event) => {
        // same destructuring event as es6 class
        const { name, value } = event.target;
        // update state by spreading in the previous state history & key value pair...
        return changeState({ ...curState, [name]: value });
    }

    const addTodo = () => {

        updateArr([...todosArr, curState])

        let target = document.querySelector('#todos');
        todosArr.map((el, i) => {

            let newTodo = createElement(Todo, {title: el.title, description: el.description})
            render(newTodo, target);


        })
        // let newTodo = createElement(Todo, { title: curState.title, description: curState.description });
        // render(newTodo, target);
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

const htmlTable = document.querySelector('#todos');

const htmlEl = document.querySelector('#todo-form');
render(createElement(inputForm), htmlEl);
