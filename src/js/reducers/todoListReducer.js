import todoListActionTypes from "../actions/todoListActionTypes.js";

const initData = {
    items: [
        {
            id: Math.floor(Math.random() * 10000),
            text: "aaa"
        },
        {
            id: Math.floor(Math.random() * 10000),
            text: "bbb"
        },
        {
            id: Math.floor(Math.random() * 10000),
            text: "ccc"
        }
    ]
};

const todoListReducer = (data = initData, action) => {
    switch (action.type) {
        case todoListActionTypes.ADD_TODO:
            return {
                items: [
                    ...data.items,
                    {
                        id: Math.floor(Math.random() * 10000),
                        text: action.payload.text
                    }
                ]
            };
        case todoListActionTypes.DELETE_TODO:
            return {
                items: data.items.filter(item => item.id !== action.payload.id)
            };
        case todoListActionTypes.UPDATE_TODO:
            return {
                items: data.items.map(item => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            text: action.payload.text
                        };
                    }

                    return item;
                })
            };
        default:
            return data;
    }
};

export default todoListReducer;