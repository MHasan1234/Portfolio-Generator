import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PortfolioForm from '../components/PortfolioForm.jsx';

// Placeholder URLs for template previews
const template1Preview = 'https://i.imgur.com/h4j7W4n.png'; 
const template2Preview = 'https://i.imgur.com/A1ef9z4.png';

const API_URL = 'http://localhost:3001/professionals';

function CreateProfilePage() {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const navigate = useNavigate();

    const handleCreateProfile = async (formData) => {
        const profileData = {
            ...formData,
            templateId: selectedTemplate, 
            id: Date.now()
        };
        try {
            await axios.post(API_URL, profileData);
            alert('Profile created successfully!');
            navigate('/');
        } catch (error) {
            console.error("Error creating profile:", error);
            alert('Failed to create profile.');
        }
    };

    if (!selectedTemplate) {
        return (
            <div className="container">
                <h2>Choose Your Template</h2>
                <p>Select a professional template that best represents your style.</p>
                <div className="template-selection">
                    <div className="template-card" onClick={() => setSelectedTemplate('template1')}>
                        <img src={template1Preview} alt="Template 1 Preview" />
                        <h3>Template 1</h3>
                        <p>A modern and clean design with a prominent hero section.</p>
                        <button className="btn">Customize This Template</button>
                    </div>
                    <div className="template-card" onClick={() => setSelectedTemplate('template2')}>
                        <img src={template2Preview} alt="Template 2 Preview" />
                        <h3>Template 2</h3>
                        <p>A split-screen layout with a timeline for skills and a portfolio grid.</p>
                        <button className="btn">Customize This Template</button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <button onClick={() => setSelectedTemplate(null)} className="btn btn-secondary mb-4">
                &larr; Back to Template Selection
            </button>
            <h2>Fill Your Profile Details (Template: {selectedTemplate})</h2>
            <PortfolioForm onSubmit={handleCreateProfile} />
        </div>
    );
}

export default CreateProfilePage;