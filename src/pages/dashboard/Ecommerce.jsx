import HeaderBanner from '../../components/HeaderBanner';
import AlertCard from '../../components/AlertCard';
import StatCard from '../../components/StatCard';
import RevenueChart from '../../components/charts/RevenueChart';
import TransactionCard from '../../components/TransactionCard';
import ProductOverviewCard from '../../components/ProductOverviewCard';
import PerformanceCard from '../../components/PerformanceCard';
import PromoBanner from '../../components/PromoBanner';
import DemographicMap from '../../components/charts/DemographicMap';

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

            <div className="row g-4">
                <div className="col-xl-4 col-lg-4">
                    <div className="overflow-hidden rounded-4 border bg-white px-3 pt-3 pb-3 px-sm-4">
                        <DemographicMap />
                    </div>
                </div>

                <div className="col-xl-8 col-lg-8">
                    <div className="overflow-hidden rounded-4 border bg-white px-3 pt-3 pb-3 px-sm-4">

                        {/* Header */}
                        <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-2 mb-4">
                            <div>
                                <h3 className="fs-5 fw-semibold text-dark mb-0">
                                    Recent Orders
                                </h3>
                            </div>

                            <div className="d-flex align-items-center gap-3">
                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm d-inline-flex align-items-center gap-2 px-3 py-2"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                    >
                                        <path
                                            d="M14.653 5.905a2.57 2.57 0 00-5.141 0m5.141 0a2.57 2.57 0 01-5.141 0m5.141 0h3.055m-8.196 0h-7.22m3.055 8.192a2.57 2.57 0 015.141 0m-5.141 0a2.57 2.57 0 005.141 0m-5.141 0H2.292m8.196 0h7.22"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    Filter
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-outline-secondary btn-sm px-3 py-2"
                                >
                                    See all
                                </button>
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div className="table-responsive">
                            <table className="table align-middle mb-0">

                                <thead className="border-top border-bottom">
                                    <tr>
                                        <th className="py-3 small fw-medium text-secondary">
                                            Products
                                        </th>
                                        <th className="py-3 small fw-medium text-secondary">
                                            Category
                                        </th>
                                        <th className="py-3 small fw-medium text-secondary">
                                            Price
                                        </th>
                                        <th className="py-3 small fw-medium text-secondary">
                                            Status
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {/* Order 1 */}
                                    <tr>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="./images/product/product-01.jpg"
                                                    alt="MacBook Pro 13"
                                                    width="50"
                                                    height="50"
                                                    className="rounded object-fit-cover"
                                                />

                                                <div>
                                                    <p className="small fw-semibold text-dark mb-1">
                                                        MacBook Pro 13”
                                                    </p>
                                                    <span className="small text-secondary">
                                                        2 Variants
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            Laptop
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            $2399.00
                                        </td>

                                        <td className="py-3">
                                            <span className="badge rounded-2 bg-success-subtle text-success fw-medium">
                                                Delivered
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Order 2 */}
                                    <tr>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="./images/product/product-02.jpg"
                                                    alt="Apple Watch Ultra"
                                                    width="50"
                                                    height="50"
                                                    className="rounded object-fit-cover"
                                                />

                                                <div>
                                                    <p className="small fw-semibold text-dark mb-1">
                                                        Apple Watch Ultra
                                                    </p>
                                                    <span className="small text-secondary">
                                                        1 Variant
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            Watch
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            $879.00
                                        </td>

                                        <td className="py-3">
                                            <span className="badge rounded-2 bg-warning-subtle text-warning-emphasis fw-medium">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Order 3 */}
                                    <tr>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="./images/product/product-03.jpg"
                                                    alt="iPhone 15 Pro Max"
                                                    width="50"
                                                    height="50"
                                                    className="rounded object-fit-cover"
                                                />

                                                <div>
                                                    <p className="small fw-semibold text-dark mb-1">
                                                        iPhone 15 Pro Max
                                                    </p>
                                                    <span className="small text-secondary">
                                                        2 Variants
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            SmartPhone
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            $1869.00
                                        </td>

                                        <td className="py-3">
                                            <span className="badge rounded-2 bg-success-subtle text-success fw-medium">
                                                Delivered
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Order 4 */}
                                    <tr>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="./images/product/product-04.jpg"
                                                    alt="iPad Pro 3rd Gen"
                                                    width="50"
                                                    height="50"
                                                    className="rounded object-fit-cover"
                                                />

                                                <div>
                                                    <p className="small fw-semibold text-dark mb-1">
                                                        iPad Pro 3rd Gen
                                                    </p>
                                                    <span className="small text-secondary">
                                                        2 Variants
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            Electronics
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            $1699.00
                                        </td>

                                        <td className="py-3">
                                            <span className="badge rounded-2 bg-danger-subtle text-danger fw-medium">
                                                Canceled
                                            </span>
                                        </td>
                                    </tr>

                                    {/* Order 5 */}
                                    <tr>
                                        <td className="py-3">
                                            <div className="d-flex align-items-center gap-3">
                                                <img
                                                    src="./images/product/product-05.jpg"
                                                    alt="AirPods Pro 2nd Gen"
                                                    width="50"
                                                    height="50"
                                                    className="rounded object-fit-cover"
                                                />

                                                <div>
                                                    <p className="small fw-semibold text-dark mb-1">
                                                        AirPods Pro 2nd Gen
                                                    </p>
                                                    <span className="small text-secondary">
                                                        1 Variant
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            Accessories
                                        </td>

                                        <td className="py-3 small text-secondary">
                                            $240.00
                                        </td>

                                        <td className="py-3">
                                            <span className="badge rounded-2 bg-success-subtle text-success fw-medium">
                                                Delivered
                                            </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
