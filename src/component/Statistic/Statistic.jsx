import React from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Statistic = () => {
  const data = [
    {
      name: 'A-01',
      mark: 60,
    },
    {
      name: 'A-02',
      mark:60
    },
    {
      name: 'A-03',
      mark:56
    },
    {
      name: 'A-04',
      mark:60
    },
    {
      name: 'A-05',
      mark:60
    },
    {
      name: 'A-06',
      mark:53
    },
    {
      name: 'A-07',
      mark:60
    },
    {
      name: 'A-08',
      mark:60
    }
  ];
  return (
    <div className='mt-12 content-center bg-green-100 p-10 rounded-lg'>
        <ComposedChart
          width={600}
          height={500}
          data ={data}
        >
           <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend></Legend>
          <Area type="monotone" dataKey="mark" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line dataKey='name' type="monotone"></Line>
          <Scatter dataKey="mark" fill="red" />
        </ComposedChart>
    </div>
  );
};

export default Statistic;