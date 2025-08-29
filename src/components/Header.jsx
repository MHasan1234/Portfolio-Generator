import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="app-header">
            <Link to="/" className="logo">PortfolioGen</Link>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create-profile">Create Profile</NavLink>
            </nav>
        </header>
    );
}

export default Header;