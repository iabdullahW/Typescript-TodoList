import React, { useState } from 'react'

interface AddToDoFormProps {
    addTask: (text: string) => void;
}


const AddToDoForm: React.FC<AddToDoFormProps> = ({ addTask }) => {
    const [text, setText] = useState('');

    const handleSumbit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTask(text);
        setText('');
    }
    return (
        <form className='mt-4 flex gap-2' onSubmit={handleSumbit}>
            <input type="text" className='p-2 border rounded w-full' value={text} onChange={e => setText(e.target.value)} placeholder="Add a new task..." />
            <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded'>
                ADD TASK
            </button>
        </form>
    )
}

export default AddToDoForm