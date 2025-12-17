import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
);

const GlucoseChart = () => {
    const [dataPoints, setDataPoints] = useState([100, 102, 105, 108, 110, 112, 115, 118, 115, 112, 110]);
    const [labels, setLabels] = useState(Array.from({ length: 11 }, (_, i) => i));

    useEffect(() => {
        const interval = setInterval(() => {
            setDataPoints(prevData => {
                const lastValue = prevData[prevData.length - 1];
                const change = Math.floor(Math.random() * 5) - 2;
                let newValue = lastValue + change;
                if (newValue < 80) newValue = 80;
                if (newValue > 160) newValue = 160;
                return [...prevData.slice(1), newValue];
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Glucose',
                data: dataPoints,
                borderColor: '#E74C3C', // Using a reddish/orange color like the screenshot "Kidney Buddy" chart
                backgroundColor: 'rgba(231, 76, 60, 0.05)',
                borderWidth: 2,
                tension: 0.4, // Smooth curve
                pointRadius: 0, // Hide points for clean look
                pointHoverRadius: 4,
                fill: true,
            },
            {
                // Second line for comparison/baseline (simulated)
                label: 'Baseline',
                data: dataPoints.map(d => 100 + (d * 0.1)), // Just a dummy second line
                borderColor: '#3498DB',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.4,
                pointRadius: 0,
            }
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: '#1A1A1A',
                titleColor: '#fff',
                bodyColor: '#fff',
                padding: 10,
                cornerRadius: 8,
                displayColors: false
            },
        },
        scales: {
            y: {
                display: true,
                type: 'linear',
                grid: {
                    color: '#f0f0f0',
                    drawBorder: false,
                },
                ticks: {
                    font: { family: 'Outfit', size: 10 },
                    color: '#9CA3AF'
                }
            },
            x: {
                display: false, // Hide X axis labels for cleaner look
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        }
    };

    return <Line data={data} options={options} />;
};

export default GlucoseChart;
