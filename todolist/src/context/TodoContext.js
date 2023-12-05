import {createContext, useContext} from "react";

export const TodoContext = createContext({
    Todos : [
        {
            id: 1,
            todo: 'Todo msg',
            completed: false
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    checkmark: (id) => {},
})

export const useTodo = () => {
    return useContext(TodoContext)
}