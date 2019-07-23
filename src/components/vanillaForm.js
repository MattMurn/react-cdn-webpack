// file to handle the vanilla js form input

let vanillaButton = document.querySelector('#add-todo-btn');
let vanillaTitle = document.querySelector('#todo-title').value;
let vanillaDescription = document.querySelector('#todo-description').value;


let handleClick = () => {
    console.log(todosArray);

    return todosArray.push({ title: vanillaTitle, description: vanillaDescription });
}

vanillaButton.addEventListener('click', handleClick);
