// file to handle the vanilla js form input

var vanillaButton = document.querySelector('#add-todo-btn');
var vanillaTitle = document.querySelector('#todo-title').value;
var vanillaDescription = document.querySelector('#todo-description').value;

var todosArray = [{ title: 'first', description: 'hard coded task from the vanilla form file' }, { title: 'second', description: "also hard coded from the vanilla for file" }];

var handleClick = function handleClick() {
    console.log(todosArray);

    return todosArray.push({ title: vanillaTitle, description: vanillaDescription });
};

vanillaButton.addEventListener('click', handleClick);