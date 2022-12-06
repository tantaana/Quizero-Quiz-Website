import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';
import './Practice.css'

const Practice = () => {
    const practice = useLoaderData();
    console.log(practice.data.total)
    return (
        <div className='container mt-5'>
            <div className='border border-1 rounded border-primary practice mb-5'>
                <h2 className='mt-5 mb-3 fw-bold'>Quiz of <span className='text-danger'><u>{practice.data.name}</u></span></h2>
                <h4 className='mb-5'>Total Question: {practice.data.total}</h4>

                <div>
                    {
                        practice.data.questions.map(que => <Questions key={que.id}
                            que={que}></Questions>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Practice;