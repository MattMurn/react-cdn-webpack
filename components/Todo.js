'use strict';

var e = React.createElement;

var Todo = function Todo(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "div",
            { "class": "card", style: "width: 18rem;" },
            React.createElement("img", { src: "...", "class": "card-img-top", alt: "..." }),
            React.createElement(
                "div",
                { "class": "card-body" },
                React.createElement(
                    "h5",
                    { "class": "card-title" },
                    props.title
                ),
                React.createElement(
                    "p",
                    { "class": "card-text" },
                    "Some quick example text to build on the card title and make up the bulk of the card's content."
                ),
                React.createElement(
                    "a",
                    { href: "#", "class": "btn btn-primary" },
                    "Go somewhere"
                )
            )
        )
    );
};

export default Todo;