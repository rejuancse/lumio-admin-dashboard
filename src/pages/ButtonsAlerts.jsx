import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';

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

            <div class="row g-4 mb-4">
                <div class="col-12 col-lg-6">
                    <div class="card border-light shadow-sm p-4 h-100">
                    <h5 class="card-title mb-4">Button Styles</h5>

                    <h6 class="mb-3">Solid Color Buttons</h6>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <button class="btn-custom btn-custom-primary" type="button">Primary Button</button>
                        <button class="btn-custom btn-custom-secondary" type="button">Secondary Button</button>
                        <button class="btn-custom btn-custom-light" type="button">Light Button</button>
                        <button class="btn-custom btn-custom-danger" type="button">Danger Button</button>
                        <button class="btn-custom btn-custom-warning" type="button">Warning Button</button>
                    </div>

                    <h6 class="mb-3">Outline Buttons</h6>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <button class="btn-custom btn-custom-outline-primary" type="button">Outline Primary</button>
                        <button class="btn-custom btn-custom-outline-secondary" type="button">Outline Secondary</button>
                        <button class="btn-custom btn-custom-outline-danger" type="button">Outline Danger</button>
                    </div>

                    <h6 class="mb-3">Buttons with Icons</h6>
                    <div class="d-flex flex-wrap gap-2 mb-4">
                        <button class="btn-custom btn-custom-primary" type="button">
                        <i class="bi bi-search"></i> Search
                        </button>
                        <button class="btn-custom btn-custom-secondary" type="button">
                        <i class="bi bi-file-earmark-arrow-down"></i> Download Report
                        </button>
                        <button class="btn-custom btn-custom-light" type="button">
                        <i class="bi bi-gear"></i> Settings
                        </button>
                    </div>

                    <h6 class="mb-3">Button Sizing</h6>
                    <div class="d-flex flex-wrap align-items-center gap-2">
                        <button class="btn-custom btn-custom-primary btn-custom-lg" type="button">Large Action</button>
                        <button class="btn-custom btn-custom-primary" type="button">Default Size</button>
                        <button class="btn-custom btn-custom-primary btn-custom-sm" type="button">Small Action</button>
                    </div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="card border-light shadow-sm p-4 h-100">
                    <h5 class="card-title mb-4">Notification Alerts</h5>

                    <div class="alert-custom alert-custom-primary">
                        <i class="bi bi-info-circle-fill alert-custom-icon"></i>
                        <div class="alert-custom-content">
                        A simple custom primary warning alert. Feel free to customize its layout context.
                        </div>
                    </div>

                    <div class="alert-custom alert-custom-success">
                        <i class="bi bi-check-circle-fill alert-custom-icon"></i>
                        <div class="alert-custom-content">
                        <strong>Success Alert:</strong> Your data synchronization completed with zero error results!
                        </div>
                        <button class="alert-custom-close" type="button" aria-label="Close" onclick="this.parentElement.remove();">
                        <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div class="alert-custom alert-custom-danger">
                        <i class="bi bi-exclamation-triangle-fill alert-custom-icon"></i>
                        <div class="alert-custom-content">
                        <strong>Danger Warning:</strong> There was an issue processing your subscription payment bounds.
                        </div>
                        <button class="alert-custom-close" type="button" aria-label="Close" onclick="this.parentElement.remove();">
                        <i class="bi bi-x-lg"></i>
                        </button>
                    </div>

                    <div class="alert-custom alert-custom-warning">
                        <i class="bi bi-exclamation-circle-fill alert-custom-icon"></i>
                        <div class="alert-custom-content">
                        <strong>Notice Warning:</strong> Please check your local database connection variables immediately.
                        </div>
                    </div>

                    <div class="alert-custom alert-custom-info">
                        <i class="bi bi-lightbulb-fill alert-custom-icon"></i>
                        <div class="alert-custom-content">
                        <strong>Tip Accent:</strong> You can minimize the left-side navigational sidebar options using the toggle.
                        </div>
                    </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ButtonsAlerts;
