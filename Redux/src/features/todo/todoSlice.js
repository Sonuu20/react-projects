import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState : {
        todos : [{id: 1, text: "Hello world!"}]
    },
        reducers: {  
            //whenever we use the reducer we get the acess to 2 things, state & action
            //state give the current state of the initalState,while action provide the action performed such as event
            addTodo: (state, action) => {
                const todo = {
                    id: nanoid(),
                    text: action.payload //payload itself is merely an object only
                }
                state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            },
            updateData: (state, action) => {
                return action.payload;
              },
              fetchTodos: (state, action) => {
                return action.payload;
              },
        }
})

export const {addTodo, removeTodo, updateData, fetchTodos} = todoSlice.actions

// export const updateData = (todos) => {
//     localStorage.setItem('todo-msg', JSON.stringify(todos));
//     return {
//        type: 'todos/update',
//        payload: todos,
//     };
// };

export default todoSlice.reducer