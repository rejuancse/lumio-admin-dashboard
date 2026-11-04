import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

function BarChart({ labels = [], data = [] }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const chart = new Chart(canvasRef.current, {
            type: 'bar',
            plugins: [ChartDataLabels],
            data: {
                labels,
                datasets: [
                    {
                        label: 'Income',
                        data: data[0] || [],
                        backgroundColor: '#073b2a',
                        borderColor: '#073b2a',
                        borderWidth: 1,
                        barPercentage: 0.75,
                        categoryPercentage: 0.65,
                    },
                    {
                        label: 'Expense',
                        data: data[1] || [],
                        backgroundColor: '#a8f000',
                        borderColor: '#a8f000',
                        borderWidth: 1,
                        barPercentage: 0.75,
                        categoryPercentage: 0.65,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        ticks: {
                            color: '#718078',
                            font: {
                                size: 16,
                            },
                            padding: 12,
                        },
                    },
                    y: {
                        beginAtZero: true,
                        suggestedMax: 100000,
                        ticks: {
                            display: false,
                        },
                        border: {
                            display: false,
                        },
                        grid: {
                            display: true,
                            color: '#e5ece9',
                            lineWidth: 1,
                        },
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (context) {
                                const label = context.dataset.label;
                                const value = context.parsed.y ?? 0;

                                return `${label} $${value.toLocaleString()}`;
                            },
                        },
                    },
                    datalabels: {
                        display: false,
                    },
                },
            },
        });

        return () => chart.destroy();
    }, [labels, data]);

    return (
        <div
            style={{
                width: '100%',
                height: '280px',
            }}
        >
            <canvas ref={canvasRef} />
        </div>
    );
}

export default BarChart;
