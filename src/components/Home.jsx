// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section with Background Image */}
            <div className="relative">
                <img
                    src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1728399104/lms/istockphoto-535677723-612x612_jp4d77.jpg"
                    alt="Career Guidance"
                    className="w-full h-96 object-cover opacity-70 blur-sm"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-red-500 mb-4">Shape Your Future</h1>
                    <p className="text-lg text-black mb-4">Unlock the door to your dream career with expert guidance and mentorship.</p>
                    <Link to="/login">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                            Get Started
                        </button>
                    </Link>

                    <Link to="/signup">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition">
                            Signup
                        </button>
                    </Link>
                </div>
            </div>

            {/* Quotes Section */}
            <div className="py-16 px-8 bg-gray-900">
                <h2 className="text-3xl font-semibold text-center text-red-500 mb-8">Inspirational Quotes</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <p className="text-xl italic text-white">"The best way to predict your future is to create it." - Peter Drucker</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <p className="text-xl italic text-white">"Success is not the key to happiness. Happiness is the key to success." - Albert Schweitzer</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                        <p className="text-xl italic text-white">"Your career is your business, and it’s time for you to manage it as a CEO." - Dorit Sher</p>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="py-16 px-8">
                <h2 className="text-3xl font-semibold text-center text-red-500 mb-8">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                        <img src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1728402329/lms/621c39fb9a4d6d2693a5faf8_Screen_Shot_2022-02-18_at_4.14.00_PM_-_Maggie_Burnetti_rh2cqj.png" alt="Career Paths" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Explore Career Paths</h3>
                        <p className="text-gray-400">Discover different career options and choose the one that fits your passion and skills.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                        <img src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1728402325/lms/images_jo9p9b.png" alt="Mentorship" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Get Mentorship</h3>
                        <p className="text-gray-400">Connect with experienced professionals who can guide you towards success.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                        <img src="https://res.cloudinary.com/dnbutfdy7/image/upload/v1728402325/lms/images_hpbsa4.jpg" alt="Resources" className="mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Access Resources</h3>
                        <p className="text-gray-400">Browse our curated list of resources to help you excel in your chosen field.</p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="py-8 bg-gray-900 text-center">
                <p className="text-gray-400">&copy; 2024 Career Guidance Platform. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Home;
