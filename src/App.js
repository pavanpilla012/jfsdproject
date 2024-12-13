// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('isAuthenticated'));
    const [isAdmin, setIsAdmin] = useState(!!localStorage.getItem('isAdmin'));

    const handleUserLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.removeItem('isAdmin'); // Ensure admin is not logged in for user
        setIsAuthenticated(true);
        setIsAdmin(false); // Explicitly set isAdmin to false for user
    };

    const handleAdminLogin = () => {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('isAdmin', 'true');
        setIsAuthenticated(true);
        setIsAdmin(true);
    };

    const handleSignup = ()=>{
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.removeItem('isAdmin'); // Ensure admin is not logged in for user
        setIsAuthenticated(true);
        setIsAdmin(false); 
    }

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('isAdmin');
        setIsAuthenticated(false);
        setIsAdmin(false);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route 
                    path="/login" 
                    element={<Login handleUserLogin={handleUserLogin} handleAdminLogin={handleAdminLogin} />} 
                />
                <Route path="/signup"  element={<Signup handleSignup={handleSignup}/>} />
                <Route path='/admin/dashboard' element={<AdminDashboard/>} />
                {/* Protected User Route */}
                <Route
                    path="/user/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated && !isAdmin}>
                            <UserDashboard handleLogout={handleLogout} />
                        </ProtectedRoute>
                    }
                />

                {/* Protected Admin Route */}
                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated && isAdmin}>
                            <AdminDashboard handleLogout={handleLogout} />
                        </ProtectedRoute>
                    }
                />

                {/* Redirect to Home for unknown routes */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;
