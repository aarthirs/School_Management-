import React, { useState } from 'react';

const AddTeacher = ({ onAddTeacher }) => {
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTeacher = {
            id: Math.floor(Math.random() * 1000),
            name,
            subject
        };
        onAddTeacher(newTeacher);
        setName('');
        setSubject('');
    };

    return (
        <div>
            <h2>Add Teacher</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddTeacher;
