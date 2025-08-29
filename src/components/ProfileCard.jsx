import React from 'react';
import { Link } from 'react-router-dom';

function ProfileCard({ professional }) {
    return (
        <div className="profile-card">
            <img src={professional.profileImage} alt={professional.name} className="profile-card-img" />
            <h3>{professional.name}</h3>
            <h4>{professional.title}</h4>
            <p className="profile-card-bio">{professional.bio.substring(0, 100)}...</p>
            <div className="profile-card-skills">
                {professional.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                ))}
            </div>
            <Link to={`/portfolio/${professional.id}`} className="btn btn-secondary">
                View Portfolio
            </Link>
        </div>
    );
}

export default ProfileCard;