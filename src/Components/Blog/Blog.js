import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container mt-5'>
            <h1 className='text-danger fw-bold mb-5'>FAQ:</h1>

            <div className='p-5 rounded border border-2 border-secondary hover-blog mb-4'>
                <h2 className='d-flex justify-content-start text-primary fw-semibold'><b>Q1.</b> What is the purpose of React Router?</h2>
                <h4 className='text-start'><u><b>Ans:</b></u> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</h4>
            </div>

            <div className='p-5 rounded border border-2 border-secondary hover-blog mb-4'>
                <h2 className='d-flex justify-content-start text-primary fw-semibold'><b>Q2.</b> How does context API work?</h2>
                <h4 className='text-start'><u><b>Ans:</b></u> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</h4>
            </div>

            <div className='p-5 rounded border border-2 border-secondary hover-blog mb-5'>
                <h2 className='d-flex justify-content-start text-primary fw-semibold'><b>Q3.</b> What is useRef in ReactJS?</h2>
                <h4 className='text-start'><u><b>Ans:</b></u> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly. <p>useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0).</p></h4>
            </div>
        </div>
    );
};

export default Blog;