'use strict';

const e = React.createElement;
const todo = props => {
    return (
        <div>
            {{props}}
        </div>
    )
}
const inputForm = () => {
    const [curInput, changeInput] = React.useState("");
    const [curTodos, updateTodos] = React.useState([])
    const inputHandler = (event) => {
        changeInput(event.target.value);
    }
    const newTodo = () => {
        if(!curInput) return;
        let todoContainer = document.querySelector('#todos');
        // console.log(typeof(curInput));
        let freshTodo = <Todo content={curInput}/>;
        curTodos.push(freshTodo);

        console.log(curTodos);
        curTodos.forEach(element => {
            console.log(element);
        });
        // udpate curTodos, and loop through to render them with         
        // ReactDOM.render(freshTodo, htmlTodo);
    }
    return (
        <div className="todo-container__new-todo-container">
            <input onChange={inputHandler} type="text" placeholder="enter new todo"/>
            <button className="btn" onClick={newTodo}>Create</button>
            <div id="todos">
                {curTodos}
            </div>
        </div>
    );
}
const Todo = props => {
    return (
        <div className="new-todo">
            {() => {
                curTodos.map(el => el);
            }}
            <button> X </button>
        </div>
    )
}
const htmlEl = document.querySelector('#todo-form');
ReactDOM.render(e(inputForm), htmlEl);
