import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const trendStyles = {
    up: {
        lineColor: '#22C55E',
        fillRGBA: 'rgba(34, 197, 94',
        data: [45, 51, 46, 58, 52, 62, 55, 72, 65, 79, 75, 89]
    },
    down: {
        lineColor: '#EF4444',
        fillRGBA: 'rgba(239, 68, 68',
        data: [65, 72, 54, 62, 50, 55, 45, 50, 40, 44, 34, 30]
    }
};

/* Dashed vertical indicator line at hovered point */
const hoverLinePlugin = {
    id: 'lumioline-hover-line',
    afterDatasetsDraw(chart) {
        const activePoint = chart.tooltip?.getActiveElements?.()[0];
        if (!activePoint) return;

        const { ctx, chartArea } = chart;
        const x = activePoint.element.x;

        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([4, 4]);
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(11, 19, 15, 0.25)';
        ctx.moveTo(x, chartArea.top);
        ctx.lineTo(x, chartArea.bottom);
        ctx.stroke();
        ctx.restore();
    }
};

function Lumioline({ trend = 'up' }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const { lineColor, fillRGBA, data } = trendStyles[trend] ?? trendStyles.up;

        const chart = new Chart(canvasRef.current, {
            type: 'line',
            data: {
                labels: data.map((_, index) => index),
                datasets: [{
                    data: data,
                    borderColor: lineColor,
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 4,
                    pointHoverBackgroundColor: '#FFFFFF',
                    pointHoverBorderColor: lineColor,
                    pointHoverBorderWidth: 2,
                    backgroundColor: (context) => {
                        const { ctx, chartArea } = context.chart;
                        if (!chartArea) return null;

                        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                        gradient.addColorStop(0, `${fillRGBA}, 0.25)`);
                        gradient.addColorStop(1, `${fillRGBA}, 0)`);

                        return gradient;
                    }
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: true,
                        backgroundColor: '#051C12',
                        titleColor: '#FFFFFF',
                        bodyColor: '#FFFFFF',
                        padding: 10,
                        cornerRadius: 8,
                        caretSize: 5,
                        displayColors: false,
                        titleFont: { family: "'Plus Jakarta Sans', sans-serif" },
                        bodyFont: { family: "'Plus Jakarta Sans', sans-serif", weight: 'bold' },
                        callbacks: {
                            title: () => '',
                            label: (context) => `${context.parsed.y}`
                        }
                    }
                },
                scales: {
                    x: { display: false },
                    y: { display: false }
                }
            },
            plugins: [hoverLinePlugin]
        });

        return () => chart.destroy(); 
    }, [trend]);

    return <canvas ref={canvasRef} aria-hidden="true"></canvas>;
}

export default Lumioline;
