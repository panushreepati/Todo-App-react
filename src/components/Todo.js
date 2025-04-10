import {
    BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
  } from 'recharts';
  
import React, { useState } from 'react';
import './Todo.css';
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {

    const [input,setInput] = useState('');
    const [todo,setTodo] = useState([]);

    const chartData = todo.map((task, index) => ({
        name: `Task ${index + 1}`,
        chars: task.length
      }));
      

    function handleOnChange(event) {
        setInput(event.target.value);
    }

    function todoApp() {
        if (input!=='') {
            setTodo([...todo,input]);
            console.log(todo);
            setInput("");

        }
    }

    function handleOnDlt(i) {
        const updateTodo = todo.filter((elem,id) => {
            return i!==id;
        })
        setTodo(updateTodo);
    }

  return (
    <div className='container'>

        <div className='input'>
            <input onChange={handleOnChange} value={input} type='text' placeholder='Enter Your Task'></input> 

            <button className='add-btn' onClick={() => todoApp()}>
              <IoIosAddCircle />
            </button>
        </div>
        
        {todo.map((data, i) => (
  <div className='list-container' key={i}>
    <div className='list-item'>
      {data}
    </div>
    <div className='dlt-btn' onClick={() => handleOnDlt(i)}>
      <MdDeleteForever />
    </div>
  </div>
))}

<div className='chart-wrapper'>
  <h3 className='chart-title'>Task Character Count</h3>
  <ResponsiveContainer width="100%" height={100}>
    <BarChart data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="chars" fill="#a855f7" radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
    </div>
 </div>
  )
}

export default Todo
