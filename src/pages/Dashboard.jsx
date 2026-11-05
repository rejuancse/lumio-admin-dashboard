import useNavigation from '../hooks/useNavigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Default from './dashboard/Default';
import Ecommerce from './dashboard/Ecommerce';

export default function Dashboard() {
    const { currentPath } = useNavigation();

    return (
        <>
            <Header />
            {
                currentPath === '/ecommerce' ?
                    <Ecommerce /> :
                    <Default />
            }
            <Footer />
        </>
    );
}
