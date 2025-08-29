import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addtodo } from "../features/todo/todoSlice";

function Addtodo (){

    const [input,setInput] = useState('')
    const dispatch = useDispatch()
    // usedispatch uses a reducer and adds values to the the store 

    const addTodoHandler = (event) => {
        event.preventDefault();
        dispatch(addtodo(input))
        // this input will go to the addtodo function in the todoSlice file and go into action.payload
        setInput("")
    }

    return(
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800  rounded-2xl text-white border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-4 px-8 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 rounded-3xl py-2 px-6 focus:outline-none hover:bg-indigo-600 text-lg"
      >
        +
      </button>
    </form>
  )
}

export default Addtodo;

