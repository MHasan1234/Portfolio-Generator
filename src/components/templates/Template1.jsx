import React from 'react';
import './Template1.css';

function Template1({ data }) {
    return (
        <div className="template1">
            <section className="t1-hero">
                <div className="t1-hero-content">
                    <h1>{data.name}</h1>
                    <h2>{data.title}</h2>
                    <p>{data.tagline}</p>
                </div>
                <img src={data.profileImage} alt={data.name} />
            </section>

            <section className="t1-about">
                <h3>About Me</h3>
                <p>{data.bio}</p>
                <ul>
                    <li><strong>Email:</strong> {data.email}</li>
                    <li><strong>Location:</strong> {data.location}</li>
                </ul>
            </section>

            <section className="t1-skills">
                <h3>My Skills</h3>
                <div className="t1-skills-container">
                    {data.skills.map(skill => <span key={skill} className="t1-skill-tag">{skill}</span>)}
                </div>
            </section>

             <section className="t1-services">
                <h3>Services</h3>
                <div className="t1-services-container">
                    {data.services.map(service => (
                        <div key={service.title} className="t1-service-card">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Template1;