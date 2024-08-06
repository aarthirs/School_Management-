import React from 'react';

const StudentList = ({ students }) => {
    return (
        <div>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name} - {student.grade}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
