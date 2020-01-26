import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import todoListStore from "./stores/todoListStore.js";

import TodoList from "./components/TodoList.jsx";

ReactDOM.render(
    <Provider store={todoListStore}><TodoList/></Provider>,
    document.getElementById("root")
);