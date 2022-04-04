import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, Pie, PieChart, ResponsiveContainer, Scatter, Tooltip, XAxis, YAxis } from 'recharts';
import useRecharts from '../../hooks/useRecharts';
import './Dashboard.css'

const Dashboard = () => {
    const [recharts] = useRecharts();

    return (
        <div className='chart-container'>
            <div className='responsive-chart-container'>
                <div className='composedChart'>
                    <ResponsiveContainer width={700} height={350}>
                        <ComposedChart
                            width={900}
                            height={400}
                            data={recharts}
                            margin={{
                                top: 20,
                                right: 20,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="month" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                            <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                            <Bar dataKey="sell" barSize={10} fill="#413ea0" />
                            <Bar dataKey="investment" barSize={30} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                            <Scatter dataKey="investment" fill="red" />
                            <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
                <div className='pie-chart'>
                    <ResponsiveContainer width={400} height={350}>
                        <PieChart width={400} height={400}>
                            <Tooltip></Tooltip>
                            <Pie data={recharts} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#ed6734" />
                            <Pie data={recharts} dataKey="investment" cx="50%" cy="50%" outerRadius={80} fill="#ed6734" />
                            <Pie data={recharts} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#824ffb" label />
                        </PieChart>

                    </ResponsiveContainer>
                </div>
            </div>

            <div className='bar-chart'>
                <div>
                    <BarChart width={1000} height={400} data={recharts}>
                        <XAxis dataKey="name" stroke="#824ffb" />
                        <YAxis />
                        <Tooltip />
                        {/* <CartesianGrid stroke="#ccc" strokeDasharray="5 5" /> */}
                        <Bar dataKey="investment" fill="#824ffb" barSize={30} />
                        <Bar dataKey="revenue" fill="#824ffb" barSize={30} />
                        <Bar dataKey="sell" fill="#824ffb" barSize={20} />
                        <Bar dataKey="revenue" fill="#824ffb" barSize={20} />

                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
            </div>



        </div>
    );
};

export default Dashboard;
