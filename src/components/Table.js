const { createElement, useState, useEffect } = React;
const { render } = ReactDOM;

'use strict'

const Table = (props) => {
    const [ tableData, updateTable ] = useState({title: 'first', description: 'this is a default task'});
    
    useEffect(()=> {
        updateTable(...tableData, transferObject);
    })

    return (
        <Todo title={tableData.title} description={tableData.description}/>
    )
}

const htmlTableElement = document.querySelector('#todos');
render(createElement(Table), htmlTableElement);
