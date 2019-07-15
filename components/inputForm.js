
// const Todo = import('./Todo.js');
// import { Todo } from './Todo';

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var e = React.createElement;

var Todo = function Todo(props) {
    var timestamp = new Date();
    console.log(timestamp.toDateString());

    return React.createElement(
        "tr",
        null,
        React.createElement(
            "th",
            { scope: "row" },
            "1"
        ),
        React.createElement(
            "td",
            null,
            props.title
        ),
        React.createElement(
            "td",
            null,
            props.description
        ),
        React.createElement(
            "td",
            null,
            timestamp.toString()
        ),
        React.createElement(
            "td",
            null,
            " ",
            React.createElement(
                "button",
                null,
                "Mark as completed"
            ),
            " "
        )
    );
};

var inputForm = function inputForm() {
    var _React$useState = React.useState({ title: "", description: "" }),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        curInput = _React$useState2[0],
        inputChange = _React$useState2[1];

    var inputHandler = function inputHandler(event) {
        // same destructuring event as es6 class
        var _event$target = event.target,
            name = _event$target.name,
            value = _event$target.value;
        // update state by spreading in the previous state history & key value pair...

        return inputChange(Object.assign({}, curInput, _defineProperty({}, name, value)));
    };

    var addTodo = function addTodo() {

        var target = document.querySelector('#todos');
        var newTodo = e(Todo, { title: curInput.title, description: curInput.description });
        ReactDOM.render(newTodo, target);
        // pass props into the new instance of todo comonent then render.
    };

    return React.createElement(
        "div",
        { className: "todo-container__new-todo-container" },
        React.createElement("input", { onChange: inputHandler, name: "title", type: "text", placeholder: "enter todo title" }),
        React.createElement("input", { onChange: inputHandler, name: "description", type: "text", placeholder: "add description here" }),
        React.createElement(
            "button",
            { className: "btn", onClick: addTodo },
            "Create"
        )
    );
};

var htmlEl = document.querySelector('#todo-form');
ReactDOM.render(e(inputForm), htmlEl);