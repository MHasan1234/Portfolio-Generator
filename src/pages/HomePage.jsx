import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';

const API_URL = 'http://localhost:3001/professionals';

function HomePage() {
    const [professionals, setProfessionals] = useState([]);

    useEffect(() => {
        const fetchProfessionals = async () => {
            try {
                const response = await axios.get(API_URL);
                setProfessionals(response.data);
            } catch (error) {
                console.error("Error fetching professionals:", error);
            }
        };
        fetchProfessionals();
    }, []);

    return (
        <div className="container">
            <div className="home-header">
                 <h1>Meet Our Professionals</h1>
                 <p>Meet the experts shaping the future of tech.</p>
                 <Link to="/create-profile" className="btn btn-primary">List Your Profile</Link>
            </div>
            <div className="profile-list">
                {professionals.map(prof => (
                    <ProfileCard key={prof.id} professional={prof} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;