import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email,password)
        // Special case for admin login
        console.log(email === "admin@gmail.com")
        console.log(password === "admin")
        if (email === "admin@gmail.com" && password === "admin") {
            navigate('/admin/dashboard');  // Redirect to admin dashboard
            return;  // Prevent further execution
        }

        try {
            // Send login credentials to the backend
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                alert('Login successful');
                navigate('/user/dashboard');  // Redirect to user dashboard after successful login
            } else {
                const errorData = await response.text();
                setError(errorData);  // Show error message from backend
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred during login');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-black">
            <form onSubmit={handleSubmit} className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primary-red">Login</h2>

                <div className="mb-4">
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Login
                </button>
            </form>

            <div className="mt-6 flex flex-col items-center gap-4">
                <button
                    onClick={() => navigate('/signup')}
                    className="bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                >
                    Don't have an account? Sign up
                </button>
            </div>
        </div>
    );
};

export default Login;
