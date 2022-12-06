import React from 'react';
import { useLoaderData } from 'react-router-dom';
import quiz from '../../quiz.jpg'
import Platform from '../Platform/Platform';
import './Home.css'

const Home = () => {
    const home = useLoaderData();
    return (
        <div>
            <div className='mt-5 p-3 rounded  container d-md-flex flex-sm-column flex-md-row justify-content-md-start align-items-lg-center justify-content-sm-center home-bg'>
                <div className='d-flex justify-content-md-start justify-content-center'>
                    <img className='img-fluid w-50' src={quiz} alt="" />
                </div>
                <div className='mt-5 mt-md-0'>
                    <h1>Welcome to <span className='fw-bold text-primary'>QuiZero</span><span className='text-danger fw-bold'>!</span></h1>
                    <h4 className='mt-5 text-secondary'>We love to test people by giving them several quizes. By answering those quizes, you can test yourself whether your general knowledge and IQ are strong enough or not!</h4>
                </div>
            </div>

            <div className='container mt-5 align-platform'>
                {
                    home.data.map(platform => <Platform
                        key={platform.id}
                        platform={platform}></Platform>)
                }
            </div>
        </div>
    );
};

export default Home;