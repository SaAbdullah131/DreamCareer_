import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const Statistic = () => {
    const data01 = [
        { name: 'Assignment', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];
    return (
       <div className='mt-10 mx-auto'>
        <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Pie dataKey="value" data={data01} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
                <Legend></Legend>
            </PieChart>
        </ResponsiveContainer>
        <h2>Oi kia kaj kortesos ken?</h2>
       </div>
    );
};

export default Statistic;