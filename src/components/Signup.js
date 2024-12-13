import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = ({ handleSignup }) => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
        qualification: '',
        email: '',
        contact: '',
        password: '',  // Password field
    });
    const [error, setError] = useState('');
    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
        hasNumber: false,
        hasSpecialChar: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // If the changed field is password, validate it
        if (name === 'password') {
            validatePassword(value);
        }
    };

    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setPasswordValidations({
            minLength,
            hasUppercase,
            hasLowercase,
            hasNumber,
            hasSpecialChar,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, gender, age, qualification, email, contact, password } = formData;

        // Basic validation for the form fields
        if (!name || !gender || !age || !qualification || !email || !contact || !password) {
            setError('All fields are required.');
            return;
        }

        // Check if the password is valid
        if (!Object.values(passwordValidations).every(Boolean)) {
            setError('Please fix the password validations.');
            return;
        }

        // Send POST request to the backend server to save user data
        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),  // Send all form data including password
            });

            if (response.ok) {
                alert('Signup successful');
                handleSignup();
                navigate('/login'); // Redirect to login page after successful signup
            } else {
                const errorMessage = await response.text();
                alert(`Signup failed: ${errorMessage}`);
                setError(errorMessage); // Show error message from backend
                setFormData({
                    name: '',
                    gender: '',
                    age: '',
                    qualification: '',
                    email: '',
                    contact: '',
                    password: '',  // Clear password field
                });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error occurred during signup');
            setError('Error occurred during signup');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-black">
            <form onSubmit={handleSubmit} className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4 text-primary-red">Signup</h2>

                <div className="mb-4">
                    <label className="block text-gray-300">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Gender</label>
                    <select
                        name="gender"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Age</label>
                    <input
                        type="number"
                        name="age"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.age}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Qualification</label>
                    <input
                        type="text"
                        name="qualification"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.qualification}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-300">Contact</label>
                    <input
                        type="tel"
                        name="contact"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password input */}
                <div className="mb-4">
                    <label className="block text-gray-300">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="w-full p-2 border border-gray-500 rounded"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password validation */}
                <div className="mb-4">
                    <ul className="text-gray-300 text-sm">
                        <li className={`flex items-center ${passwordValidations.minLength ? 'text-green-500' : 'text-red-500'}`}>
                            {passwordValidations.minLength ? '✓' : '✗'} Minimum 8 characters
                        </li>
                        <li className={`flex items-center ${passwordValidations.hasUppercase ? 'text-green-500' : 'text-red-500'}`}>
                            {passwordValidations.hasUppercase ? '✓' : '✗'} At least one uppercase letter
                        </li>
                        <li className={`flex items-center ${passwordValidations.hasLowercase ? 'text-green-500' : 'text-red-500'}`}>
                            {passwordValidations.hasLowercase ? '✓' : '✗'} At least one lowercase letter
                        </li>
                        <li className={`flex items-center ${passwordValidations.hasNumber ? 'text-green-500' : 'text-red-500'}`}>
                            {passwordValidations.hasNumber ? '✓' : '✗'} At least one number
                        </li>
                        <li className={`flex items-center ${passwordValidations.hasSpecialChar ? 'text-green-500' : 'text-red-500'}`}>
                            {passwordValidations.hasSpecialChar ? '✓' : '✗'} At least one special character
                        </li>
                    </ul>
                </div>

                {/* Show validation errors */}
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-primary-red text-white p-2 rounded hover:bg-black hover:text-primary-red"
                    disabled={!Object.values(passwordValidations).every(Boolean)}
                >
                    Signup
                </button>
            </form>
        </div>
    );
};

export default Signup;
