'use strict';
const e = React.createElement;

 const Todo = props => {
    let timestamp = new Date().getDate();
    return (
        <tr>
        <th scope="row">{props.num}</th>
        <td className="todo_table_title">{props.title}</td>
        <td className="todo_table_description">{props.description}</td>
        <td className="todo_table_timestamp">{timestamp.toString()}</td>
        <td className="todo_table_complete"><button className="complete_btn" onClick={props.onClick}>X</button></td>
      </tr>
    )
}
