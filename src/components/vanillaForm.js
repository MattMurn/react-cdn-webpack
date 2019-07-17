// file to handle the vanilla js form input

let vanillaButton = document.querySelector('#add-todo-btn');
let vanillaTitle = document.querySelector('#todo-title');
let vanillaDescription = document.querySelector('#todo-description');

let transferObject = {};

let handleClick = () => {
    console.log(transferObject);
    // set transferObject with input data;
    transferObject.title = vanillaTitle.value;
    transferObject.description = vanillaTitle.value;
    return;
}

vanillaButton.addEventListener('click', handleClick);
