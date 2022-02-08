import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAuth } from '../../../utilities/useAuth'



const BarCharta = () => {
    const { deposits } = useAuth();

    return (
        <div>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Monthwise <span className='text-secondary'>Collections</span></h2>
            </div>
            <br />

            <div className='container-fluid overflow-scroll d-flex justify-content-center'>
                <ResponsiveContainer width={"100%"} height={300} >
                    <BarChart data={deposits}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="target" fill="#8884d8" />
                        <Bar dataKey="collection" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default BarCharta;