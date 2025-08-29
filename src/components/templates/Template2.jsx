import React from 'react';
import './Template2.css';

function Template2({ data }) {
    return (
        <div className="template2">
            <section className="t2-hero">
                <img src={data.profileImage} alt={data.name} className="t2-profile-img"/>
                <h1>{data.name}</h1>
                <p className="t2-title">{data.title}</p>
            </section>

            <div className="t2-main-content">
                <aside className="t2-sidebar">
                    <h3>Contact</h3>
                    <p>📧 {data.email}</p>
                    <p>📞 {data.phone}</p>
                    <p>📍 {data.location}</p>
                    <hr/>
                    <h3>Skills</h3>
                    <ul className="t2-skills-list">
                      {data.skills && data.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                </aside>
                <main className="t2-content">
                    <section>
                        <h3>About Me</h3>
                        <p>{data.bio}</p>
                    </section>
                    <section>
                        <h3>What I Offer</h3>
                         <div className="t2-services-container">
                            {data.services && data.services.map(service => (
                                service.title && <div key={service.title} className="t2-service-card">
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="t2-portfolio">
                        <h3>My Work</h3>
                        <div className="t2-portfolio-container">
                            {data.portfolio && data.portfolio.map(project => (
                                project.title && <div key={project.title} className="t2-portfolio-card">
                                    <img src={project.image} alt={project.title} />
                                    <div className="t2-portfolio-info">
                                      <h4>{project.title}</h4>
                                      <p>{project.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Template2;