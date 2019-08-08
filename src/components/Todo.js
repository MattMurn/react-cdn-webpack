'use strict';
const e = React.createElement;

 const Todo = props => {
    let timestamp = new Date();
    console.log(timestamp);
    return (
        <tr>
        <th scope="row">{props.num}</th>
        <td className="todo_table_title">{props.title}</td>
        <td className="todo_table_description">{props.description}</td>
        <td className="todo_table_timestamp">{timestamp.toString()}</td>
        <td className="todo_table_complete complete_btn" onClick={props.onClick}>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><path d="M21 6.285l-11.16 12.733-6.84-6.018 1.319-1.49 5.341 4.686 9.865-11.196 1.475 1.285z"/></svg>
      </td>
      </tr>
    )
}
