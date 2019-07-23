'use strict';
const e = React.createElement;

 const Todo = props => {

    return (
        <tr>
        <th scope="row">{props.num}</th>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.timestamp}</td>
      </tr>
    )
}
