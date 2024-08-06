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

    const handleLogin = (type) => {
        setLoggedIn(true);
        setUserType(type);
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setUserType('');
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
                            <StudentList />
                            <AddStudent />
                        </>
                    )}
                    {userType === 'teacher' && (
                        <>
                            <TeacherList />
                            <AddTeacher />
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default App;
              
