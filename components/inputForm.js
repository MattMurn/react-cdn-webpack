'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var e = React.createElement;
var todo = function todo(props) {
    return React.createElement(
        'div',
        null,
        { props: props }
    );
};
var inputForm = function inputForm() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        curInput = _React$useState2[0],
        changeInput = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        curTodos = _React$useState4[0],
        updateTodos = _React$useState4[1];

    var inputHandler = function inputHandler(event) {
        changeInput(event.target.value);
    };
    var newTodo = function newTodo() {
        if (!curInput) return;
        var todoContainer = document.querySelector('#todos');
        // console.log(typeof(curInput));
        var freshTodo = React.createElement(Todo, { content: curInput });
        curTodos.push(freshTodo);

        console.log(curTodos);
        curTodos.forEach(function (element) {
            console.log(element);
        });
        // udpate curTodos, and loop through to render them with         
        // ReactDOM.render(freshTodo, htmlTodo);
    };
    return React.createElement(
        'div',
        { className: 'todo-container__new-todo-container' },
        React.createElement('input', { onChange: inputHandler, type: 'text', placeholder: 'enter new todo' }),
        React.createElement(
            'button',
            { className: 'btn', onClick: newTodo },
            'Create'
        ),
        React.createElement(
            'div',
            { id: 'todos' },
            curTodos
        )
    );
};
var Todo = function Todo(props) {
    return React.createElement(
        'div',
        { className: 'new-todo' },
        function () {
            curTodos.map(function (el) {
                return el;
            });
        },
        React.createElement(
            'button',
            null,
            ' X '
        )
    );
};
var htmlEl = document.querySelector('#todo-form');
ReactDOM.render(e(inputForm), htmlEl);