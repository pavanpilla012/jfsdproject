// src/components/UserDashboard.js
import React, { useState } from 'react';
import Modal from './Modal'; // Modal component we'll create

const UserDashboard = ({ handleLogout }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState(null);

    const careerPaths = [
        { id: 1, title: 'Software Engineering', description: 'A career in software development and engineering.' },
        { id: 2, title: 'Data Science', description: 'Explore data analytics and machine learning.' },
        { id: 3, title: 'UI/UX Design', description: 'Designing user-friendly interfaces and experiences.' },
    ];

    const mentors = [
        { id: 1, name: 'John Doe', expertise: 'Software Engineering', experience: '10 years' },
        { id: 2, name: 'Jane Smith', expertise: 'Data Science', experience: '8 years' },
        { id: 3, name: 'Mark Wilson', expertise: 'UI/UX Design', experience: '7 years' },
    ];
    const dummySessions = [
        { mentor: 'John Doe', time: '10 AM - 11 AM' },
        { mentor: 'Jane Smith', time: '12 PM - 1 PM' },
    ];
    const openModal = (data) => {
        setModalData(data);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalData(null);
    };

    return (
        <div className="min-h-screen bg-black text-white p-4">
            <h1 className="text-3xl font-bold mb-4 text-red-500">Welcome to the User Dashboard</h1>
            
            {/* Career Paths Section */}
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Career Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {careerPaths.map((path) => (
                    <div 
                        key={path.id} 
                        className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out" 
                        onClick={() => openModal(path)}
                    >
                        <h3 className="text-lg font-bold text-white">{path.title}</h3>
                        <p className="text-gray-400">{path.description}</p>
                    </div>
                ))}
            </div>

            {/* Mentors Section */}
            <h2 className="text-2xl font-semibold mb-4 text-red-500">Available Mentors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mentors.map((mentor) => (
                    <div 
                        key={mentor.id} 
                        className="bg-gray-800 p-4 rounded-lg shadow-md cursor-pointer hover:bg-red-500 transition duration-300 ease-in-out" 
                        onClick={() => openModal(mentor)}
                    >
                        <h3 className="text-lg font-bold text-white">{mentor.name}</h3>
                        <p className="text-gray-400">{mentor.expertise}</p>
                    </div>
                ))}
            </div>
            {/* Counseling Sessions Section */}
            <div className="w-full mb-8 mt-10">
                <h2 className="text-2xl font-bold text-red-500 mb-4">Counseling Sessions</h2>
                <div className="grid grid-cols-1 gap-4">
                    {dummySessions.map((session, index) => (
                        <div key={index} className="bg-gray-800 p-4 rounded shadow-md">
                            <p><strong>Mentor:</strong> {session.mentor}</p>
                            <p><strong>Time:</strong> {session.time}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logout Button */}
            <div className="flex justify-center mt-8">
            <button 
                className="mt-8 flex flex-col items-center justify-center bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={handleLogout}
            >
                Logout
            </button>
            </div>
            

            {/* Modal */}
            {isModalOpen && modalData && (
                <Modal closeModal={closeModal} data={modalData} />
            )}
        </div>
    );
};

export default UserDashboard;
