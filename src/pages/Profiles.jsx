import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import Profile from '../components/Profile';

const bannerInfo = {
    title: 'Profiles',
    desc: 'Manage your personal information, security settings and account preferences.'
}

function Profiles() {
    return (
        <>
            <Header />
            <HeaderBanner
                bannerTitle={bannerInfo.title}
                bannerDesc={bannerInfo.desc} />
            <Profile />
            <Footer />
        </>
    )
}

export default Profiles;
