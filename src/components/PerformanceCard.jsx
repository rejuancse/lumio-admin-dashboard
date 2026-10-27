import Doughnut from './Doughnut';

const doughnutData = {
    labels: [
        'View Count',
        'Sales',
        'Income'
    ],
    datasets: [{
        label: 'Dataset',
        data: [68, 23, 16],
        backgroundColor: [
            '#b4f105',
            '#072f1f',
            '#f97315',
        ],
        hoverOffset: 4
    }]
};

const legends = [
    { color: 'bg-lime-accent', label: 'View Count' },
    { color: 'bg-forest-medium', label: 'Percentage' },
    { color: 'bg-brand-orange', label: 'Sales' }
];

function PerformanceCard() {
    return (
        <div className="card flex-grow-1 d-flex flex-column justify-content-between mb-0">
            <div className="card-header mb-1">
                <h2 className="card-title">Total View Performance</h2>
            </div>

            <div id="views-chart">
                <Doughnut data={doughnutData} />
            </div>

            {/* Custom Legends below the chart */}
            <div className="chart-legends-container">
                {
                    legends.map( (legend, index) => {
                        return (
                            <div className="chart-legend-item" key={index}>
                                <span className={`legend-dot ${legend.color}`}></span>
                                <span className="text-muted-green">{legend.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PerformanceCard;
