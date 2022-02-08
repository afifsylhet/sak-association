import React from 'react';
import { XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
import { useAuth } from '../../../utilities/useAuth'




const LineCharta = () => {
    const { deposits } = useAuth();

    return (
        <div>
            <br />
            <div className='text-center mb-3'>
                <h2 className='text-primary d-inline border-bottom pb-2 mb-4 '>Monthwise <span className='text-secondary'>Collection trands</span></h2>
            </div>
            <br />

            <div className='container overflow-scroll d-flex justify-content-center'>
                <ResponsiveContainer width={"100%"} height={300} >
                    <AreaChart data={deposits}
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
                        <Area type="monotone" dataKey="collection" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="target" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div >
    );
};

export default LineCharta;