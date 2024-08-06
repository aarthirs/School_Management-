import React, { useState } from 'react';

const AddStudent = ({ onAddStudent }) => {
    const [name, setName] = useState('');
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
            id: Math.floor(Math.random() * 1000),
            name,
            grade
        };
        onAddStudent(newStudent);
        setName('');
        setGrade('');
    };

    return (
        <div>
            <h2>Add Student</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddStudent;
