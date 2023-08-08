import React from 'react';
import clsx from 'clsx';
import { GrFormClose, GrFormEdit, GrFormCheckmark } from 'react-icons/gr';
import { useTodoLayerValue } from './context/TodoContext';






const Todo = ({ todo }) => {

  const [{}, dispatch] = useTodoLayerValue();

  const removeTodo = todoId => {
     dispatch({
      type: "REMOVE_TODO",
      payload: todoId,
     })
  }


  const complateTodo = todoId => {
    dispatch({
     type: "COMPLATE-TODO",
     payload: todoId,
    });
 };
 
 const todoStyle = clsx({
  ["todo-row"]: true,
  ["complated"]: todo.isComplated,
 })


  return (
    <div className='todoStyle'>
      <div onClick={() => complateTodo(todo.id)}>
        {todo.content}
      </div>
      <div className='todo-icons'>
            <GrFormClose className="todo-icon" onClick={() => removeTodo(todo.id)} /> 
            <GrFormEdit className="todo-icon" /> 
      </div> 
    </div>
  )
}

export default Todo;
	
	
