import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';

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




const LineCharta = () => {
    return (
        <div>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Monthwise <span className='text-secondary'>Collection trands</span></h2>
            </div>
            <br />

            <div className='container overflow-scroll d-flex justify-content-center'>
                <ResponsiveContainer width={"100%"} height={300} >
                    <AreaChart data={data}
                    >
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="Collection" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="Target" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default LineCharta;