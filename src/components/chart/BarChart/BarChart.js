import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "name": "Sep-2021",
        "Collection": 136000,
        "Target": 136000
    },
    {
        "name": "Oct-2021",
        "Collection": 130000,
        "Target": 136000
    },
    {
        "name": "Nov-2021",
        "Collection": 128000,
        "Target": 136000
    },
    {
        "name": "Dec-2021",
        "Collection": 132000,
        "Target": 136000
    },
    {
        "name": "Jan-2022",
        "Collection": 120000,
        "Target": 136000
    },
    {
        "name": "Feb-2022",
        "Collection": 432000,
        "Target": 476000
    },
    {
        "name": "Mar-2022",
        "Collection": 0,
        "Target": 136000
    },
    {
        "name": "Apr-2022",
        "Collection": 0,
        "Target": 136000
    },
    {
        "name": "May-2022",
        "Collection": 0,
        "Target": 136000
    },
]

const BarCharta = () => {

    return (
        <div>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Monthwise <span className='text-secondary'>Collections</span></h2>
            </div>
            <br />

            <div className='container-fluid overflow-scroll d-flex justify-content-center'>
                <ResponsiveContainer width={"100%"} height={300} >
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Target" fill="#8884d8" />
                        <Bar dataKey="Collection" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default BarCharta;