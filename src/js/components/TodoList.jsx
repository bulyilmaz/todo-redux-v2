import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import todoListActions from "../actions/todoListActions.js";

class TodoList extends Component {
    state = {
        text: ""
    };

    handleClick = text => {
        this.props.addTodo(text);
        this.setState({
            text: ""
        });
    };

    handleClick2 = (event, id) => {
        event.preventDefault();
        this.props.deleteTodo(id);
    };

    handleClick3 = (event, id) => {
        event.preventDefault();
        this.props.updateTodo(id, "bulent");
    };

    handleChange = event => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        const { text } = this.state;

        return (
            <Fragment>
                <ul>
                    { this.props.items.map((item, index) => (
                        <li key={index}>{item.text} <a href="" onClick={event => this.handleClick3(event, item.id)}>update</a> <a href="" onClick={event => this.handleClick2(event, item.id)}>delete</a></li>
                    )) }
                </ul>
                <input value={text} onChange={event => this.handleChange(event)}/> <button onClick={() => this.handleClick(text)}>add</button>
            </Fragment>
        );
    }
}

const mapStateToProps = (storeData, prevProps) => {
    return {
        ...prevProps,
        items: storeData.items
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: text => {
            dispatch(todoListActions.addTodo(text));
        },
        deleteTodo: id => {
            dispatch(todoListActions.deleteTodo(id));
        },
        updateTodo: (id, text) => {
            dispatch(todoListActions.updateTodo(id, text));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);