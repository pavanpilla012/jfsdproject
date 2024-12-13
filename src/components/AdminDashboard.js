// src/components/AdminDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
    const dummyUsers = [
        { name: 'John Doe', role: 'Student', active: true },
        { name: 'Jane Smith', role: 'Counselor', active: true },
    ];

    const dummyResources = [
        { title: 'Software Engineering', description: 'How to start a career in software engineering' },
        { title: 'Data Science', description: 'Everything about data science career' },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-black text-white p-8">
            <h1 className="text-4xl font-bold text-primary-red mb-8">Admin Dashboard</h1>

            {/* User Data Section */}
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-primary-red mb-4">Users</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyUsers.map((user, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
                            <h3 className="text-xl font-bold">{user.name}</h3>
                            <p>Role: {user.role}</p>
                            <p>Status: {user.active ? 'Active' : 'Inactive'}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Manage Resources Section */}
            <div className="w-full mb-8">
                <h2 className="text-2xl font-bold text-primary-red mb-4">Manage Career Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {dummyResources.map((resource, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
                            <h3 className="text-xl font-bold">{resource.title}</h3>
                            <p>{resource.description}</p>
                        </div>
                    ))}
                </div>
                
            </div>

            <button
                
                className="bg-primary-red p-2 rounded hover:bg-black hover:text-primary-red"
            >
                <Link to="/" >Sign Out</Link> 
            </button>
        </div>
    );
};

export default AdminDashboard;
