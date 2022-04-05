import React from 'react';
import { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
const MixBarChart = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <BarChart
            width={600}
            height={300}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
            <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
            <Bar dataKey="investment" fill="#ffc658" />
        </BarChart>
    );
};

export default MixBarChart;