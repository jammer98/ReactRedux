import { createSlice,nanoid } from "@reduxjs/toolkit";

// this createSlice will creates slices and this nonoid will create 
// unique ids

const initialState = {
    todos :[]
}

export const todoSlice = createSlice({
    name: 'todo',
    // this name is a property will be provided by createSlice function 
    initialState,
    reducers:{
        // this reduces will have functions and we will define this functions inside it 
        addtodo :(state,action) =>{
            // functions inside the reducers will have two parameters 
            // state :
            // actions: this action have a payload , payload is object from this payload we can accsess anthing like id,text,email anthing.. 
            const todo ={
            id: nanoid(),
            text : action.payload
            }
            state.todos.push(todo)
            // this todos shoukd be of the same name as the initialSate which we have defined on the top as an object 
        },
        removetodo : (state,action)  =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // filter : if the id is not equal to the id given by the action.payload then give it back to the todos array
            // if the id matches then dont return to todos array 
            // we are over-riding the todos array  
        },
        updatetodo : (state,action) =>{
            state.todos = state.todos.map((todo) => (todo.id === action.payload.id) ? {...todo,text: action.payload.text} : todo)
            // this will upadate the todo 
            // we have override the state again with state.todos and did a map in the todos with todo index in which we check the id which we get from the 
            // payload and if the id is correct then edit the text inside the state with the state.todos.text if not then simple keep the todo as it is

        }
    }
})

export const {addtodo,removetodo,updatetodo} = todoSlice.actions 

export default todoSlice.reducer

//  updatetodo function is left for the function and the button and the implementaion
