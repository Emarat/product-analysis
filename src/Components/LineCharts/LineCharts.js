import React from 'react';
import { useEffect, useState } from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <LineChart width={600} height={300} data={data}>
            <Line type="monotone" dataKey="investment" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            <Line type="monotone" dataKey="sell" stroke="#8884d4" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis dataKey="" />
            <Tooltip />
        </LineChart>
    );
};

export default LineCharts;