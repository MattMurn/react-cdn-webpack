'use strict';

var e = React.createElement;

var Todo = function Todo(props) {
    var timestamp = new Date();
    console.log(timestamp);
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
            { className: "todo_table_complete complete_btn", onClick: props.onClick },
            React.createElement(
                "svg",
                { width: "24", height: "24", xmlns: "http://www.w3.org/2000/svg", fill: "#fff" },
                React.createElement("path", { d: "M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z" })
            )
        )
    );
};