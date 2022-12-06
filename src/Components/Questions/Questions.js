import React from 'react';
import Answer from './Answer/Answer';
import './Questions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ que }) => {
    const { question } = que;

    // show toast
    const notify = () => toast.info(que.correctAnswer,
        {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        });


    // check right/wrong answer

    const buttonCheck = ans => {
        if (ans === que.correctAnswer) {
            toast('❤️ Correct Answer ❤️',
                {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip
                })
        }
        else {
            toast('❌ Wrong Answer ❌',
                {
                    position: "top-right",
                    autoClose: 800,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Flip
                })
        }
    }


    return (
        <div className='container mb-5'>
            <div className='d-flex gap-5 align-items-center justify-content-between mx-3'>
                <h4 className='mb-3'><b><u>Q: </u></b> <span className='text-secondary fw-bold'>{question}</span></h4>

                <div>
                    <button onClick={notify} data-toggle="tooltip" title="Show the correct answer" className='eye-btn border-0'><FontAwesomeIcon icon={faEye} /></button>
                    <ToastContainer />
                </div>
            </div>

            <div className='questions'>
                {
                    que.options.map(ans => <Answer key={ans.id} ans={ans}
                        buttonCheck={buttonCheck}></Answer>)
                }
            </div>
        </div>
    );
};

export default Questions;