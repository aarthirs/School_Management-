import React, { useState } from 'react';
import Navbar from './components/Layout/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import StudentList from './components/Students/StudentList';
import AddStudent from './components/Students/AddStudent';
import TeacherList from './components/Teachers/TeacherList';
import AddTeacher from './components/Teachers/AddTeacher';

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [userType, setUserType] = useState('');
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', grade: 'Grade 10' },
        { id: 2, name: 'Jane Smith', grade: 'Grade 11' }
    ]);
    const [teachers, setTeachers] = useState([
        { id: 1, name: 'Mr. Brown', subject: 'Mathematics' },
        { id: 2, name: 'Ms. Green', subject: 'Science' }
    ]);

    const handleLogin = (type) => {
        setLoggedIn(true);
        setUserType(type);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserType('');
    };

    const addStudent = (student) => {
        setStudents([...students, student]);
    };

    const addTeacher = (teacher) => {
        setTeachers([...teachers, teacher]);
    };

    return (
        <div>
            <Navbar loggedIn={loggedIn} userType={userType} onLogout={handleLogout} />
            {!loggedIn ? (
                <>
                    <Login onLogin={handleLogin} />
                    <Register />
                </>
            ) : (
                <>
                    {userType === 'student' && (
                        <>
                            <StudentList students={students} />
                            <AddStudent onAddStudent={addStudent} />
                        </>
                    )}
                    {userType === 'teacher' && (
                        <>
                            <TeacherList teachers={teachers} />
                            <AddTeacher onAddTeacher={addTeacher} />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default App;
