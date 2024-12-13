import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CareerResources() {
    const [resources, setResources] = useState([]);

    useEffect(() => {
        const fetchResources = async () => {
            const response = await axios.get('/api/career-resources');
            setResources(response.data);
        };
        fetchResources();
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-5">Career Resources</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {resources.map((resource) => (
                    <div key={resource.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold">{resource.title}</h3>
                        <p className="mt-2 text-gray-600">{resource.description}</p>
                        <span className="text-sm text-blue-500 mt-3">{resource.type}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CareerResources;
