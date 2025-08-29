import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Template1 from '../components/templates/Template1';
import Template2 from '../components/templates/Template2';

function PortfolioPage() {
    const { id } = useParams();
    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/professionals/${id}`);
                setPortfolioData(response.data);
            } catch (err) {
                setError("Could not fetch portfolio data.");
            } finally {
                setLoading(false);
            }
        };
        fetchPortfolio();
    }, [id]);

    if (loading) return <p>Loading portfolio...</p>;
    if (error) return <p>{error}</p>;
    if (!portfolioData) return <p>No portfolio found.</p>;

    // Dynamically render the template based on the data
    switch (portfolioData.templateId) {
        case 'template1':
            return <Template1 data={portfolioData} />;
        case 'template2':
            return <Template2 data={portfolioData} />;
        default:
            return <p>Invalid template selected.</p>;
    }
}

export default PortfolioPage;