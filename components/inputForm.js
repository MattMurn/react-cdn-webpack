var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _React = React,
    createElement = _React.createElement,
    useState = _React.useState;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


'use strict';
// This is a comment that I am adding

var inputForm = function inputForm() {
    var _useState = useState({ title: "", description: "" }),
        _useState2 = _slicedToArray(_useState, 2),
        curState = _useState2[0],
        changeState = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        todosArr = _useState4[0],
        updateArr = _useState4[1];

    var inputHandler = function inputHandler(event) {
        // same destructuring event as es6 class
        var _event$target = event.target,
            name = _event$target.name,
            value = _event$target.value;
        // update state by spreading in the previous state history & key value pair...

        return changeState(Object.assign({}, curState, _defineProperty({}, name, value)));
    };

    var addTodo = function addTodo() {

        updateArr([].concat(_toConsumableArray(todosArr), [curState]));

        var target = document.querySelector('#todos');
        todosArr.map(function (el, i) {

            var newTodo = createElement(Todo, { title: el.title, description: el.description });
            render(newTodo, target);
        });
        // let newTodo = createElement(Todo, { title: curState.title, description: curState.description });
        // render(newTodo, target);
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

var htmlTable = document.querySelector('#todos');

var htmlEl = document.querySelector('#todo-form');
render(createElement(inputForm), htmlEl);

/*
    The real crux of this is to get a form input, add todo to table, and manage state through the table
    use vanilla js to manage the form submit, then pass it into the react component that will manage the tables.
*/