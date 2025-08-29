import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CreateProfilePage from './pages/CreateProfilePage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/create-profile" element={<CreateProfilePage />} />
                        <Route path="/portfolio/:id" element={<PortfolioPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;