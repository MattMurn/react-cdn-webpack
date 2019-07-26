'use strict';

var e = React.createElement;

var Todo = function Todo(props) {
    var timestamp = new Date().getDate();
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "th",
            { scope: "row" },
            props.num
        ),
        React.createElement(
            "td",
            { className: "todo_table_title" },
            props.title
        ),
        React.createElement(
            "td",
            { className: "todo_table_description" },
            props.description
        ),
        React.createElement(
            "td",
            { className: "todo_table_timestamp" },
            timestamp.toString()
        ),
        React.createElement(
            "td",
            { className: "todo_table_complete" },
            React.createElement(
                "button",
                { className: "complete_btn", onClick: props.onClick },
                "X"
            )
        )
    );
};