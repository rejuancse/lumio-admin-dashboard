import Card from '../Card';
import BarChart from './BarChart';

const chartInfo = {
    title: 'Revenue',
    labelValue1: 'Income',
    labelValue2: 'Expenses',
    amount: '$196.000',
    badget: '+35% from last month'
}

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
const barData = [
    [44000, 52000, 38000, 61000, 47000, 68000, 55000, 72000], // Income
    [23000, 45000, 32000, 45000, 41000, 52000, 36000, 50000], // Expense
];

function RevenueChart() {
    return (
        <div className="card mb-0">
            <Card
                title={chartInfo.title}
                labelValue1={chartInfo.labelValue1}
                labelValue2={chartInfo.labelValue2}
                amount={chartInfo.amount}
                badget={chartInfo.badget}
            />

            <div id="revenue-chart">
                <BarChart labels={labels} data={barData} />
            </div>
        </div>
    )
}

export default RevenueChart;
