import React from 'react';

const TeacherList = ({ teachers }) => {
    return (
        <div>
            <h2>Teachers</h2>
            <ul>
                {teachers.map(teacher => (
                    <li key={teacher.id}>{teacher.name} - {teacher.subject}</li>
                ))}
            </ul>
        </div>
    );
};

export default TeacherList;
