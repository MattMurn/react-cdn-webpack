const { createElement, useState } = React;
const { render } = ReactDOM;


'use strict';
<<<<<<< HEAD
// nice comment dude!
=======
// This is a commit that I am adding
>>>>>>> willBranch

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

/*
    The real crux of this is to get a form input, add todo to table, and manage state through the table
    use vanilla js to manage the form submit, then pass it into the react component that will manage the tables.
*/