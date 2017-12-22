import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import TodoItem from './todoItem.js';
import {toggleTodo, removeTodo} from '../actions.js';
import {FilterTypes} from '../../constants.js';
//import {bindActionCreateors} from 'redux';

class ToDoList extends Component {

    // constructor(props, context) {
    //     super(props, context);
    // }

    render() {
        const {todos, onToggleToDo, onRemoveTodo} = this.props;
        return (
            <ul className="todo-list">
                {
                    todos.map((item) =>(
                        <TodoItem
                        key={item.id}
                        text={item.text}
                        completed={item.completed}
                        onToggle={ () => onToggleToDo(item.id)}
                        onRemove={ () => onRemoveTodo(item.id)}/>
                    ) )
                }
            </ul>
        )
    }
};

// const ToDoList = ({todos, onToggleTodo, onRemoveTodo}) => {
//     return (
//       <ul className="todo-list">
//       {
//         todos.map((item) => (
//           <TodoItem
//             key={item.id}
//             text={item.text}
//             completed={item.completed}
//             onToggle={() => onToggleTodo(item.id)}
//             onRemove={() => onRemoveTodo(item.id)}
//           />
//           ))
//       }
//       </ul>
//     );
//   };

ToDoList.propTypes = {
    todos: PropTypes.array.isRequired
};

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed);
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed);
        default:
            throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state) => {
    return {
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleToDo: (id) => {
            dispatch(toggleTodo(id));
        },
        onRemoveTodo: (id) => {
            dispatch(removeTodo(id));
        }
    }
}

// const mapDispatchToProps = (dispatch) => bindActionCreators({
//         onToggleToDo: toggleTodo,
//         onRemoveTodo: removeTodo
//     },
//     dispatch
// );

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);