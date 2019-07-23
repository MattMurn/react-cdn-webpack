const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;

'use strict'
let todosArray = [{title: 'first', description: 'hard coded task from the vanilla form file'}, {title: 'second', description: "also hard coded from the vanilla for file"}];

const Table = () => {
    // setting state with empty array, testing out useEffect to updateTable on mount.
    const [ tableData, updateTable ] = useState([]);
    const [ title, updateTitle ] = useState("");
    const [description, updateDescription] = useState("");
    
    /* TODO - need to figure out how to listen for changes in the todosArray and reRender.
        probably something in useEffect / context api. 
        then figure out how to handle the 
    */
   // replacing the old componentDidMount lifecycle event.
    useEffect(()=> {
        updateTable(todosArray);
    })

    const handleInputChange = event => {
        console.log(event.target.value);
        if(event.target.name === 'title'){
            updateTitle(event.target.value);
        }
        else if(event.target.name === 'description'){
            updateDescription(event.target.value);
        }

    }
    const addTodo = () => {
        let newTable = [...tableData, {title: title, description: description}]
        console.log(newTable);
        updateTable(newTable);
    }
    return (
        <div className="todo-container">
            <form>
                <div className="row">
                    <div className="col-md-4">
                        <input id="todo-title" type="text" name="title" className="form-control" onChange={handleInputChange} placeholder="Todo Title" />
                    </div>
                    <div className="col-md-4">
                        <input id="todo-description" type="text" name="description" className="form-control" onChange={handleInputChange} placeholder="Todo Description" />
                    </div>
                    <button id="add-todo-btn" type="button" onClick={addTodo} className="btn btn-dark">Add Todo</button>
                </div>
            </form>
            <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Timestamp</th>
                            <th className="col-md-6" scope="col">Mark as Complete</th>
                        </tr>
                    </thead>
                    <tbody id="todos">
                        {tableData.map((row, key) => {
                            return <Todo title={row.title} description={row.description} num={key + 1} key={key} />
                        })}
                    </tbody>
                </table>
        </div>

            )
        }
        
        const htmlTableElement = document.querySelector('#todos');
        render(createElement(Table), htmlTableElement);
