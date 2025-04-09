import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
                <button className="btn btn-primary m-2">
                    <Link to="/login" className="text-white text-decoration-none">Login</Link>
                </button>
                <button className="btn btn-secondary m-2">
                    <Link to="/register" className="text-white text-decoration-none">Register</Link>
                </button>
            </div>
        </div>
    );
}

export default Home;
