

import React from 'react';
import BarCharta from '../chart/BarChart/BarChart';
import LineCharta from '../chart/LineChart/LineChart';

const AllChart = () => {
    return (
        <div>
            <BarCharta></BarCharta>
            <br></br>
            <br></br>
            <LineCharta></LineCharta>
        </div>
    );
};

export default AllChart;