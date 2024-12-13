// src/components/Modal.js
import React from 'react';

const Modal = ({ closeModal, data }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gray-900 text-white rounded-lg p-6 max-w-lg w-full shadow-lg">
                <h2 className="text-2xl font-bold text-red-500 mb-4">
                    {data.title || data.name}
                </h2>
                
                {data.title ? (
                    <>
                        {/* Display details for career paths */}
                        <p>{data.description}</p>
                        <p className="mt-4">
                            <strong>More Information:</strong> 
                            A career in {data.title} is rewarding and in-demand in today's job market.
                        </p>
                    </>
                ) : (
                    <>
                        {/* Display details for mentors */}
                        <p><strong>Expertise:</strong> {data.expertise}</p>
                        <p><strong>Experience:</strong> {data.experience}</p>
                        <p className="mt-4">
                            <strong>About:</strong> {data.name} is an expert in {data.expertise} with over {data.experience} of experience.
                        </p>
                    </>
                )}

                <button 
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
