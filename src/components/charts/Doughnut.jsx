import { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

function Doughnut({ labels = [], data = [] }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const chart = new Chart(canvasRef.current, {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                        position: 'top',
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Doughnut Chart'
                    }
                }
            },
        });

        return () => chart.destroy();
    }, [labels, data]);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
}

Doughnut.propTypes = {
    checkPercentValue: ({ data }) => {
        const invalidValue = data.find((value) => value < 0 || value > 100);

        if (invalidValue !== undefined) {
            return new Error('each data value must be between 0 and 100');
        }
    },
};

export default Doughnut;
