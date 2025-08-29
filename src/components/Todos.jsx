import React from "react";
import { useDispatch,useSelector } from "react-redux"; 
import { removetodo } from "../features/todo/todoSlice";

function Todos(){
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    // here this const todos is an array because it stores the todos array from the state and this tate is the initial stat
    // e 

    /* this useSelector have an access of state inside a callback 
     useSelector lists all the values in the store this is used to get all the todos and 
     delete some of the todos and this updated todos array will be dispatched again in the store 
     */

     /* this state inside the callback have the intialstate which we made in todoSlice and this 
     intialstate is object which contains todos in the array form 
     eg. intialState ={
            todos : [{id,text,...}]
            there will be many todos 
            therefore todos is an array which conatains many todo items or objects 
        } 
     */




    // return(
    //     <>
    //     <div>todos</div>
    //     {todos.map((todo) =>(  <li key={todo.id} > 
    //                             {todo.text} 
    //                             <button onClick={() => dispatch(removetodo(todo.id))}> Delete </button>
    //                             {/* dispatch value ko store me daalta hai to removetodo mtlb uss todo ko 
    //                             remove kardo jiska id hai frr saare todos ko store me daaldo  */}
    //                             </li>
    //                         ))}
    //     </>
    // )
     return (
    <>
    <ul className="list-none " >
        {todos.map((todo) => (
          <li
            className="mt-4 w-auto flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            <div className='text-white'>{todo.text}</div>
            <button
             onClick={() => dispatch(removetodo(todo.id))}
             /* dispatch value ko store me daalta hai to removetodo mtlb uss todo ko 
              remove kardo jiska id hai frr saare todos ko store me daaldo  */ 
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}


export default Todos;