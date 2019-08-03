const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;

'use strict'
let todosArray = [
    {title: 1, description: 'hard coded task from the vanilla form file'}, 
    {title: 2, description: "also hard coded from the vanilla for file"}
];

const Table = () => {
    // setting state with empty array, testing out useEffect to updateTable on mount.
    const [ tableData, updateTable ] = useState(todosArray);
    const [ title, updateTitle ] = useState("");
    const [description, updateDescription] = useState("");
    
    useEffect(()=> {
        // wild that this is empty for 
    }, tableData)

    const handleInputChange = event => {
        if(event.target.name === 'title'){
            updateTitle(event.target.value);
        }
        else if(event.target.name === 'description'){
            updateDescription(event.target.value);
        }
    }
    const addTodo = () => {
        let newTable = [...tableData, {title: title, description: description}]
        updateTable(newTable);
    }
    const markComplete = event => {
        // let rowIdentifier = event.target.parentNode.parentNode.children[1].innerHTML;
        // let tableIndex = tableData.forEach((row,i)=> {
        //     if(row.title === rowIdentifier){
        //         return i;
        //     }
        // })
        
        let text = document.querySelector('.complete_btn');
        this.event.target.innerHTML = "C";
        console.log(this.event.target);
        // text.classList.remove('complete_btn');
    }
    const sortColumn = () => {
        let table = tableData.sort((a,b) => b.title-a.title);
        // updateTable(table);
        console.log(tableData);
        
    }
    return (
        <div className="todo-container">
            <form>
                <div className="row todo_input">
                    <div className="col-md-4 todo_input_col">
                        <input id="todo-title" type="text" name="title" className="form-control" onChange={handleInputChange} placeholder="Todo Title" />
                    </div>
                    <div className="col-md-4 todo_input_col">
                        <input id="todo-description" type="text" name="description" className="form-control" onChange={handleInputChange} placeholder="Todo Description" />
                    </div>
                    <div className="col-md-4 todo_input_col">
                        <button id="add-todo-btn" type="button" onClick={addTodo} className="btn btn-dark">Add Todo</button>                    
                    </div>
                </div>
            </form>
            <table className="table table-striped table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col todo_table_num" onClick={sortColumn}><a>#</a></th>
                            <th scope="col todo_table_title">Title</th>
                            <th scope="col todo_table_description">Description</th>
                            <th scope="col todo_table_time">Timestamp</th>
                            <th className="col todo_table_complete" scope="col">Mark as Complete</th>
                        </tr>
                    </thead>
                    <tbody id="todos">
                        {tableData.map((row, key) => {
                            return <Todo 
                            title={row.title} 
                            description={row.description} 
                            num={key + 1} 
                            onClick={markComplete}
                            key={key} 
                            />
                        })}
                    </tbody>
                </table>
        </div>
            )
        }
        
        const htmlTableElement = document.querySelector('#todos');
        render(createElement(Table), htmlTableElement);
