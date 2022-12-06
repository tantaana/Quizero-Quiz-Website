import React from 'react';
import { Link } from 'react-router-dom';
import './Platform.css'

const Platform = ({ platform }) => {
    const { id, name, logo, total } = platform;
    return (
        <div className='platform rounded'>
            <div>
                <img className='w-50' src={logo} alt="" />
            </div>

            <div>
                <h2 className='mt-3 fw-bold'>{name}</h2>
                <button className='btn-practice fs-5 mt-5'><Link className='text-decoration-none text-light' to={`/quiz/${id}`}>Start Practice ➡️</Link></button>
            </div>
            <h4 className='mt-4'>Total Questions: {total}</h4>
        </div>
    );
};

export default Platform;