import React, {Component, PropTypes} from 'react';

class TodoItem extends Component {

    render() {
        const {onToggle, onRemove, completed, text} = this.props;
        const checkedProp = completed
            ? {
                checked: true
            }
            : {};

        return (
            <li
                className="todo-item"
                style={{
                    textDecoration: completed ? 'line-through' : 'none'
                }}
            >
                <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
                <label className="text">{text}</label>
                <button className="remove" onClick={onRemove}>×</button>
            </li>
        )
    }
}

// const TodoItem = ({onToggle, onRemove, completed, text }) => {
//     const checkedProp = completed ? {checked: true} : {};
//     return (
//       <li
//         className="todo-item"
//         style={{
//           textDecoration: completed ? 'line-through' : 'none'
//         }}
//       >
//         <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
//         <label className="text">{text}</label>
//         <button className="remove" onClick={onRemove}>×</button>
//       </li>
//     );
//   }

TodoItem.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default TodoItem;