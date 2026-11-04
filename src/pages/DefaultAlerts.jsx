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
                        <h5 className="card-title mb-4">Notification Alerts</h5>

                        <Alert primary>
                            <FaInfoCircle />
                            A simple custom primary warning alert. Feel free to customize its layout context.
                        </Alert>

                        <Alert success close>
                            <FaCheckCircle />
                            Success Alert: Your data synchronization completed with zero error results!
                        </Alert>

                        <Alert danger close>
                            <i className="bi bi-exclamation-triangle-fill alert-custom-icon"></i>
                            Danger Warning: There was an issue processing your subscription payment bounds.
                        </Alert>

                        <Alert warning close>
                            <i className="bi bi-exclamation-circle-fill alert-custom-icon"></i>
                            Notice Warning: Please check your local database connection variables immediately.
                        </Alert>

                        <Alert info close>
                            <i className="bi bi-lightbulb-fill alert-custom-icon"></i>
                            Tip Accent: You can minimize the left-side navigational sidebar options using the toggle.
                        </Alert>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ButtonsAlerts;
