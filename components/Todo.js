'use strict';

var e = React.createElement;

var Todo = function Todo(props) {

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
            props.timestamp
        )
    );
};