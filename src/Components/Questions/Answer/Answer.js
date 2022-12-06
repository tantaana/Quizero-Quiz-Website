import React from 'react';
import './Answer.css'

const Answer = ({ ans, buttonCheck }) => {
    return (
        <div onClick={() => buttonCheck(ans)} className='answer rounded m-2 p-2'>
            <button className='border border-0 btn-select w-100 fw-semibold'>
                🔸{ans}
            </button>
        </div>


    );
};

export default Answer;