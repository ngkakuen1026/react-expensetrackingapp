import React from 'react';

import { Pie } from 'react-chartjs-2';

// Helper functions
import { calculateSpent, formatCurrency, formatPercentages } from "../helerps";


const PieChart = ({budgets}) => {

    // const { id, name, amount } = budget;
    // const spent = calculateSpent(id);

    const pieData = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
        {
            data: [30, 40, 30], // Replace with your actual data
            backgroundColor: ['red', 'green', 'blue'], // Replace with desired colors
        },
        ],
    };

    const pieOptions = {
        // Add any desired options here
    };

    return (
        <div className="pie-chart">
            <Pie data={pieData} options={pieOptions} />
        </div>
    );
};

export default PieChart;