import HeaderBanner from '../../components/HeaderBanner';
import AlertCard from '../../components/AlertCard';
import StatCard from '../../components/StatCard';
import RevenueChart from '../../components/charts/RevenueChart';
import TransactionCard from '../../components/TransactionCard';
import ProductOverviewCard from '../../components/ProductOverviewCard';
import PerformanceCard from '../../components/PerformanceCard';
import PromoBanner from '../../components/PromoBanner';

const bannerInfo = {
    title: 'Dashboard',
    desc: 'An easy way to manage sales with care and precision.',
    button: true
}

const statsData = [
    {
        label: 'Net Income',
        value: '$196.000',
        trend: 'up',
        trendText: '+35% from last month',
        chartId: 'income-lumioline'
    },
    {
        label: 'Total Return',
        value: '$32.000',
        trend: 'down',
        trendText: '-24% from last month',
        chartId: 'return-lumioline'
    }
];

export default function Dashboard() {
    return (
        <>
            <HeaderBanner
                bannerTitle={bannerInfo.title}
                bannerDesc={bannerInfo.desc}
                bannerButton={bannerInfo.button}
            />

            <div className="row g-4">
                <div className="col-12">
                    <div className="row g-4">
                        {/* Left Column */}
                        <div className="col-12 col-md-8">
                            <div className="row g-4">
                                {statsData.map((stat) => (
                                    <div className="col-12 col-md-6" key={stat.chartId}>
                                        <StatCard {...stat} />
                                    </div>
                                ))}
                            </div>

                            <div className="row mt-4">
                                <div className="col-12">
                                    <RevenueChart />
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="col-12 col-md-4">
                            <PerformanceCard />
                        </div>
                    </div>
                </div>

                {/* Left Area: Charts & Lists */}
                <div className="col-xl-8 col-lg-8">
                    <div className="row g-4">
                        <div className="col-md-7 d-flex flex-column">
                            <TransactionCard />
                        </div>

                        <div className="col-md-5 d-flex flex-column">
                            <ProductOverviewCard />
                        </div>
                    </div>
                </div>

                {/* Right Area: Performance Details Sidebar Panel */}
                <div className="col-xl-4 col-lg-4">
                    <div className="right-panel-wrapper d-flex flex-column gap-4 h-100">
                        <PromoBanner />
                    </div>
                </div>
            </div>
        </>
    )
}
