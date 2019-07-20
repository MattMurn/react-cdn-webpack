const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;

'use strict'

const Table = () => {
    const [ tableData, updateTable ] = useState(todosArray);
    /* TODO - need to figure out how to listen for changes in the todosArray and reRender.
        probably something in useEffect / context api. 
        then figure out how to handle the 
    */
    // useEffect(()=> {
    //     updateTable(todosArray);
    // })

    return (
            tableData.map((row,key) => {
                return <Todo title={row.title} description={row.description} num={key+1} key={key}/>
            })
    )
}

const htmlTableElement = document.querySelector('#todos');
render(createElement(Table), htmlTableElement);
