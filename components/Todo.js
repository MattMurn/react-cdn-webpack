'use strict';

var e = React.createElement;

var Todo = function Todo(props) {
    var timestamp = new Date();

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
        )
    );
};