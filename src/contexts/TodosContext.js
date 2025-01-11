import { createContext,useContext } from "react";

export const TodoContext = createContext({
todos:[
    {
        id:2,
        todo:"Todo msg",
        compeleted:false
    },
   
],
addTodo:(todo)=>{},
deleteTodo:(id)=>{},
updateTodo:(id,todo)=>{},
toggleComplete:(id)=>{}

})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=> {
    return useContext(TodoContext)
}

