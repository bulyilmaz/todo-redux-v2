import todoListActionTypes from "./todoListActionTypes.js";

const todoListActions = {
    addTodo: text => {
        return {
            type: todoListActionTypes.ADD_TODO,
            payload: {
                text
            }
        };
    },
    deleteTodo: id => {
        return {
            type: todoListActionTypes.DELETE_TODO,
            payload: {
                id
            }
        };
    },
    updateTodo: (id, text) => {
        return {
            type: todoListActionTypes.UPDATE_TODO,
            payload: {
                id,
                text
            }
        };
    }
};

export default todoListActions;