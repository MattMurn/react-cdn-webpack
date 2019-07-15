'use strict';
console.log('Todo component connected');
const e = React.createElement;

 const Todo = props => {
    let timestamp = new Date();
    console.log(timestamp.toDateString());

    return (
        <tr>
        <th scope="row">1</th>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{timestamp.toString()}</td>
      </tr>
    )
}

export { Todo };