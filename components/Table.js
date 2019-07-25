var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _React = React,
    createElement = _React.createElement,
    useState = _React.useState,
    useEffect = _React.useEffect;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


'use strict';
var todosArray = [{ title: 'first', description: 'hard coded task from the vanilla form file' }, { title: 'second', description: "also hard coded from the vanilla for file" }];

var Table = function Table() {
    // setting state with empty array, testing out useEffect to updateTable on mount.
    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        tableData = _useState2[0],
        updateTable = _useState2[1];

    var _useState3 = useState(""),
        _useState4 = _slicedToArray(_useState3, 2),
        title = _useState4[0],
        updateTitle = _useState4[1];

    var _useState5 = useState(""),
        _useState6 = _slicedToArray(_useState5, 2),
        description = _useState6[0],
        updateDescription = _useState6[1];

    /* TODO - need to figure out how to listen for changes in the todosArray and reRender.
        probably something in useEffect / context api. 
        then figure out how to handle the 
    */
    // replacing the old componentDidMount lifecycle event.


    useEffect(function () {
        updateTable(todosArray);
    });

    var handleInputChange = function handleInputChange(event) {
        console.log(event.target.value);
        if (event.target.name === 'title') {
            updateTitle(event.target.value);
        } else if (event.target.name === 'description') {
            updateDescription(event.target.value);
        }
    };
    var addTodo = function addTodo() {
        var newTable = [].concat(_toConsumableArray(tableData), [{ title: title, description: description }]);
        console.log(newTable);
        updateTable(newTable);
    };
    return React.createElement(
        'div',
        { className: 'todo-container' },
        React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-4' },
                    React.createElement('input', { id: 'todo-title', type: 'text', name: 'title', className: 'form-control', onChange: handleInputChange, placeholder: 'Todo Title' })
                ),
                React.createElement(
                    'div',
                    { className: 'col-md-4' },
                    React.createElement('input', { id: 'todo-description', type: 'text', name: 'description', className: 'form-control', onChange: handleInputChange, placeholder: 'Todo Description' })
                ),
                React.createElement(
                    'button',
                    { id: 'add-todo-btn', type: 'button', onClick: addTodo, className: 'btn btn-dark' },
                    'Add Todo'
                )
            )
        ),
        React.createElement(
            'table',
            { className: 'table' },
            React.createElement(
                'thead',
                { className: 'thead-dark' },
                React.createElement(
                    'tr',
                    null,
                    React.createElement(
                        'th',
                        { scope: 'col' },
                        '#'
                    ),
                    React.createElement(
                        'th',
                        { scope: 'col' },
                        'Title'
                    ),
                    React.createElement(
                        'th',
                        { scope: 'col' },
                        'Description'
                    ),
                    React.createElement(
                        'th',
                        { scope: 'col' },
                        'Timestamp'
                    ),
                    React.createElement(
                        'th',
                        { className: 'col-md-6', scope: 'col' },
                        'Mark as Complete'
                    )
                )
            ),
            React.createElement(
                'tbody',
                { id: 'todos' },
                tableData.map(function (row, key) {
                    return React.createElement(Todo, { title: row.title, description: row.description, num: key + 1, key: key });
                })
            )
        )
    );
};

var htmlTableElement = document.querySelector('#todos');
render(createElement(Table), htmlTableElement);