// file to handle the vanilla js form input

var vanillaButton = document.querySelector('#add-todo-btn');
var vanillaTitle = document.querySelector('#todo-title');
var vanillaDescription = document.querySelector('#todo-description');

var transferObject = {};

var handleClick = function handleClick() {
    console.log(transferObject);
    // set transferObject with input data;
    transferObject.title = vanillaTitle.value;
    transferObject.description = vanillaTitle.value;
    return;
};

vanillaButton.addEventListener('click', handleClick);