// file to handle the vanilla js form input

let vanillaButton = document.querySelector('#add-todo-btn');
let vanillaTitle = document.querySelector('#todo-title').value;
let vanillaDescription = document.querySelector('#todo-description').value;

let todosArray = [{title: 'first', description: 'hard coded task from the vanilla form file'}, {title: 'second', description: "also hard coded from the vanilla for file"}];

let handleClick = () => {
    console.log(todosArray);

    return todosArray.push({ title: vanillaTitle, description: vanillaDescription });
}

vanillaButton.addEventListener('click', handleClick);
