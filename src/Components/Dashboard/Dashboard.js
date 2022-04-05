import React from 'react';
import LineCharts from '../LineCharts/LineCharts';
import MixBarChart from '../MixBarChart/MixBarChart';
import PieCharts from '../MixBarChart/MixBarChart';

const Dashboard = () => {
    return (
        <div>
            <LineCharts></LineCharts>
            <MixBarChart></MixBarChart>
        </div>
    );
};

export default Dashboard;