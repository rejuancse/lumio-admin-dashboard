import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import Button from '../components/elements/Button';
import Alert from '../components/elements/Alert';
import { FaSearch, FaInfoCircle, FaCheckCircle } from 'react-icons/fa';

const bannerInfo = {
    title: 'Buttons & Alerts',
    desc: 'Premium reusable call-to-actions and responsive notice alert components.',
    button: false
}

function ButtonsAlerts() {
    return (
        <>
            <Header />
            <HeaderBanner
                bannerTitle={bannerInfo.title}
                bannerDesc={bannerInfo.desc}
                bannerButton={bannerInfo.button}
            />

            <div className="row g-4 mb-4">
                <div className="col-12 col-lg-12">
                    <div className="card border-light shadow-sm p-4 h-100">
                        <h5 className="card-title mb-4">Button Styles</h5>

                        <h6 className="mb-3">Solid Color Buttons</h6>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <Button primary>Primary Button</Button>
                            <Button secondary>Secondary Button</Button>
                            <Button success>Success Button</Button>
                            <Button warning>Warning Button</Button>
                            <Button danger>Danger Button</Button>
                            <Button primary rounded>Danger Button</Button>
                        </div>

                        <h6 className="mb-3">Outline Buttons</h6>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <Button primary outline>Outline Primary</Button>
                            <Button secondary outline>Outline Secondary</Button>
                            <Button danger outline>Outline Danger</Button>
                        </div>

                        <h6 className="mb-3">Buttons with Icons</h6>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            <Button primary>
                                <FaSearch />
                                Search
                            </Button>

                            <Button secondary>
                                <i className="bi bi-file-earmark-arrow-down"></i>
                                Download Report
                            </Button>

                            <Button primary outline>
                                <i className="bi bi-gear"></i>
                                Settings
                            </Button>
                        </div>

                        <h6 className="mb-3">Button Sizing</h6>
                        <div className="d-flex flex-wrap align-items-center gap-2">
                            <Button primary className="btn-custom-lg">Large Action</Button>
                            <Button primary>Default Size</Button>
                            <Button primary className="btn-custom-sm">Small Action</Button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ButtonsAlerts;
