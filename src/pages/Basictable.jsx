import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import Table from '../components/Table';
import orders from "../json-files/orders.json";

const bannerInfo = {
    title: 'Basic Tables',
    desc: 'Highly customizable, responsive tabular data component templates.'
}

const config = [
    { label: 'Order ID' },
    { label: 'Customer' },
    { label: 'Product Info' },
    { label: 'Category' },
    { label: 'Amount' },
    { label: 'Order Date' },
    { label: 'Status' },
    { label: 'Actions' },
];

export default function BasicTable() {
    return (
        <>
            <Header />
            <HeaderBanner
                bannerTitle={bannerInfo.title}
                bannerDesc={bannerInfo.desc} />
            <Table config={config} orders={orders} />
            <Footer />
        </>
    )
}