import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const stats = useLoaderData();
    console.log(stats.data)

    return (
        <div>
            <h3 className='mt-5'>Quiz Analysis (Subject-wise)</h3>

            <div className='d-flex justify-content-center mt-5'>
                <LineChart className=''
                    width={500}
                    height={300}
                    data={stats.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <XAxis dataKey='name' />
                    <YAxis dataKey='total' />
                    <Tooltip />
                    {/* <Legend /> */}
                    <Line type="monotone" dataKey='name' stroke="#8884d8" />
                    <Line type="monotone" dataKey='total' stroke="#82ca9d" />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;