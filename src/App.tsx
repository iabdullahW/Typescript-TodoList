import React, { useState } from 'react';
import { Task } from "./types/types"
import ToDoList from './ToDoList';
import AddToDoForm from './AddToDoForm';

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
    );
  }
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  }
  return (
    <div className='bg-gray-300 h-screen p-6 '>
<h1 className='text-3xl font-bold text-center'>TypeScript Todo List</h1>
<AddToDoForm addTask={addTask} />
<ToDoList
        tasks={tasks}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
      />

    </div>
  )
}

export default App