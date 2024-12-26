import React from 'react'
import { Task } from './types/types'

interface ToDoListProps {
    tasks: Task[];
    toggleTaskCompletion: (id: number) => void;
    deleteTask: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
    tasks,
    toggleTaskCompletion,
    deleteTask,
}) => {

    return (
        <ul className='mt-4 space-y-2'>
            {tasks.map(task => (
                <li key={task.id} className={`flex justify-between items-center p-2 rounded-md ${task.completed ? 'bg-green-100 line-through' : 'bg-white'
                    }`}>
                    <span>{task.text}</span>
                    <div className='flex gap-2'>
                        <button
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                            onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? 'undo' : 'done'}
                        </button>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => deleteTask(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default ToDoList;