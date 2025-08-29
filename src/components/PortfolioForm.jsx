import React, { useState } from 'react';

function PortfolioForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: '', title: '', tagline: '', profileImage: '',
        bio: '', email: '', phone: '', location: '',
        skills: '',
        service1Title: '', service1Desc: '',
        service2Title: '', service2Desc: '',
        project1Title: '', project1Image: '', project1Desc: '',
        project2Title: '', project2Image: '', project2Desc: '',
        project3Title: '', project3Image: '', project3Desc: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            skills: formData.skills.split(',').map(s => s.trim()),
            services: [
                { title: formData.service1Title, description: formData.service1Desc },
                { title: formData.service2Title, description: formData.service2Desc },
            ],
            portfolio: [
                { title: formData.project1Title, image: formData.project1Image, description: formData.project1Desc },
                { title: formData.project2Title, image: formData.project2Image, description: formData.project2Desc },
                { title: formData.project3Title, image: formData.project3Image, description: formData.project3Desc }
            ]
        };
        onSubmit(finalData);
    };

    return (
        <form onSubmit={handleSubmit} className="portfolio-form">
            <fieldset>
                <legend>Hero Section</legend>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
                <input name="title" value={formData.title} onChange={handleChange} placeholder="Your Title (e.g., Software Engineer)" required />
                <input name="tagline" value={formData.tagline} onChange={handleChange} placeholder="Tagline" />
                <input name="profileImage" value={formData.profileImage} onChange={handleChange} placeholder="Profile Image URL" />
            </fieldset>

            <fieldset>
                <legend>About Me</legend>
                <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Your Bio" required></textarea>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" />
                <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            </fieldset>

            <fieldset>
                <legend>Skills</legend>
                <input name="skills" value={formData.skills} onChange={handleChange} placeholder="Enter skills, comma separated" />
            </fieldset>

            <fieldset>
                <legend>Services</legend>
                <input name="service1Title" value={formData.service1Title} onChange={handleChange} placeholder="Service 1 Title" />
                <input name="service1Desc" value={formData.service1Desc} onChange={handleChange} placeholder="Service 1 Description" />
                <hr/>
                <input name="service2Title" value={formData.service2Title} onChange={handleChange} placeholder="Service 2 Title" />
                <input name="service2Desc" value={formData.service2Desc} onChange={handleChange} placeholder="Service 2 Description" />
            </fieldset>
            
            <fieldset>
                <legend>Portfolio</legend>
                <p>Project 1</p>
                <input name="project1Title" value={formData.project1Title} onChange={handleChange} placeholder="Project 1 Title" />
                <input name="project1Image" value={formData.project1Image} onChange={handleChange} placeholder="Project 1 Image URL" />
                <textarea name="project1Desc" value={formData.project1Desc} onChange={handleChange} placeholder="Project 1 Description"></textarea>
                <hr/>
                <p>Project 2</p>
                <input name="project2Title" value={formData.project2Title} onChange={handleChange} placeholder="Project 2 Title" />
                <input name="project2Image" value={formData.project2Image} onChange={handleChange} placeholder="Project 2 Image URL" />
                <textarea name="project2Desc" value={formData.project2Desc} onChange={handleChange} placeholder="Project 2 Description"></textarea>
                <hr/>
                <p>Project 3</p>
                <input name="project3Title" value={formData.project3Title} onChange={handleChange} placeholder="Project 3 Title" />
                <input name="project3Image" value={formData.project3Image} onChange={handleChange} placeholder="Project 3 Image URL" />
                <textarea name="project3Desc" value={formData.project3Desc} onChange={handleChange} placeholder="Project 3 Description"></textarea>
            </fieldset>

            <button type="submit" className="btn btn-primary">Create Profile</button>
        </form>
    );
}

export default PortfolioForm;