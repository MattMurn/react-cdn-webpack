// file to handle the vanilla js form input

var vanillaButton = document.querySelector('#add-todo-btn');
var vanillaTitle = document.querySelector('#todo-title').value;
var vanillaDescription = document.querySelector('#todo-description').value;

var handleClick = function handleClick() {
    console.log(todosArray);

    return todosArray.push({ title: vanillaTitle, description: vanillaDescription });
};

vanillaButton.addEventListener('click', handleClick);