var _React = React,
    createElement = _React.createElement;
var _ReactDOM = ReactDOM,
    render = _ReactDOM.render;

var Btn = function Btn(_ref) {
    var b_class = _ref.b_class,
        content = _ref.content,
        id = _ref.id;

    return React.createElement(
        "button",
        { type: "button", "class": b_class, id: id },
        content
    );
};

var htmlBtnEl = document.querySelector('#btn-wrapper');
render(createElement(React.createElement(Btn, { b_class: "btn-danger", id: "reactify", content: "Click me for magic" }), htmlBtnEl));