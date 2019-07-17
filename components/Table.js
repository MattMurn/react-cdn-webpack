var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _React = React,
    createElement = _React.createElement,
    useState = _React.useState,
    useEffect = _React.useEffect;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;


'use strict';

var Table = function Table(props) {
    var _useState = useState({ title: 'first', description: 'this is a default task' }),
        _useState2 = _slicedToArray(_useState, 2),
        tableData = _useState2[0],
        updateTable = _useState2[1];

    useEffect(function () {
        updateTable.apply(undefined, _toConsumableArray(tableData).concat([transferObject]));
    });

    return React.createElement(Todo, { title: tableData.title, description: tableData.description });
};

var htmlTableElement = document.querySelector('#todos');
render(createElement(Table), htmlTableElement);