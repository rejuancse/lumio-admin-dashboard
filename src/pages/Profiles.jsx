import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBanner from '../components/HeaderBanner';
import avatarImg from '../assets/images/avatar.png';

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

            {/* ================= Personal Information ================= */}
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Personal Information</h5>
                    <button
                        type="button"
                        className="btn-custom btn-custom-light btn-custom-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#editProfileModal">
                        <i className="bi bi-pencil"></i>
                        Edit
                    </button>
                </div>

                {/* Profile summary */}
                <div className="d-flex align-items-center gap-3 mb-4">
                    <img
                        src={avatarImg}
                        alt="Rejuan Ahamed"
                        width="72"
                        height="72"
                        className="rounded-4 object-fit-cover flex-shrink-0" />

                    <div>
                        <h3 className="fs-5 fw-bold mb-1">Rejuan Ahamed</h3>
                        <div className="d-flex flex-wrap align-items-center gap-2 small text-secondary">
                            <span>Team Manager</span>
                            <span aria-hidden="true">&bull;</span>
                            <span>Leeds, Bangladesh</span>
                        </div>
                    </div>
                </div>

                {/* Personal fields */}
                <div className="row g-4 mb-4">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">First Name</p>
                        <p className="mb-0 fw-semibold">Rejuan</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">Last Name</p>
                        <p className="mb-0 fw-semibold">Ahamed</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">Email Address</p>
                        <p className="mb-0 fw-semibold">rejuan@lumioadmin.com</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">Phone</p>
                        <p className="mb-0 fw-semibold">+880 1712 345 678</p>
                    </div>

                    <div className="col-12">
                        <p className="form-label-custom">Bio</p>
                        <p className="mb-0 fw-semibold">
                            Team manager with 6+ years of experience leading cross-functional
                            product teams and delivering customer-focused solutions.
                        </p>
                    </div>
                </div>

                {/* Social links */}
                <p className="form-label-custom">Social Links</p>
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="table-btn-action">
                        <i className="bi bi-facebook"></i>
                    </a>

                    <a
                        href="https://x.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X (Twitter)"
                        className="table-btn-action">
                        <i className="bi bi-twitter-x"></i>
                    </a>

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="table-btn-action">
                        <i className="bi bi-linkedin"></i>
                    </a>

                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="table-btn-action">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>

            {/* ================= Address Information ================= */}
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title">Address</h5>
                    <button
                        type="button"
                        className="btn-custom btn-custom-light btn-custom-sm"
                        data-bs-toggle="modal"
                        data-bs-target="#editAddressModal">
                        <i className="bi bi-pencil"></i>
                        Edit
                    </button>
                </div>

                <div className="row g-4">
                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">Country</p>
                        <p className="mb-0 fw-semibold">Bangladesh</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">City/State</p>
                        <p className="mb-0 fw-semibold">Dhaka</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">Postal Code</p>
                        <p className="mb-0 fw-semibold">1216</p>
                    </div>

                    <div className="col-12 col-sm-6 col-lg-3">
                        <p className="form-label-custom">TAX ID</p>
                        <p className="mb-0 fw-semibold">BIN-0011223344</p>
                    </div>
                </div>
            </div>

            {/* ================= Security ================= */}
            <div className="card">
                <h5 className="card-title mb-3">Security</h5>

                {/* Change Password row */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3 py-3 border-bottom">
                    <div>
                        <h6 className="fw-bold mb-1">Change Password</h6>
                        <p className="mb-0 small text-secondary">
                            Use a strong password to protect your account.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn-custom btn-custom-light btn-custom-sm flex-shrink-0 align-self-start align-self-sm-center"
                        data-bs-toggle="modal"
                        data-bs-target="#changePasswordModal">
                        <i className="bi bi-key"></i>
                        Change Password
                    </button>
                </div>

                {/* Two-factor authentication row */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3 pt-3">
                    <div>
                        <h6 className="fw-bold mb-1">Two-Factor Authentication (2FA)</h6>
                        <p className="mb-0 small text-secondary">
                            Keep your account secure by enabling 2FA.
                        </p>
                    </div>
                    <div className="form-switch-custom flex-shrink-0 align-self-start align-self-sm-center">
                        <input
                            type="checkbox"
                            className="form-switch-input-custom"
                            role="switch"
                            id="twoFactorSwitch"
                            defaultChecked />
                        <label className="small text-secondary user-select-none" htmlFor="twoFactorSwitch">
                            Enabled
                        </label>
                    </div>
                </div>
            </div>

            {/* ================= Danger Zone ================= */}
            <div className="card">
                <h5 className="card-title mb-3">Danger Zone</h5>

                {/* Logout all devices row */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3 py-3 border-bottom">
                    <div>
                        <h6 className="fw-bold mb-1">Logout All Devices</h6>
                        <p className="mb-0 small text-secondary">
                            Sign out from every active session.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn-custom btn-custom-light btn-custom-sm flex-shrink-0 align-self-start align-self-sm-center">
                        <i className="bi bi-box-arrow-right"></i>
                        Logout
                    </button>
                </div>

                {/* Delete account row */}
                <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between gap-3 pt-3">
                    <div>
                        <h6 className="fw-bold mb-1">Delete Account</h6>
                        <p className="mb-0 small text-secondary">
                            Permanently remove your account and all data.
                        </p>
                    </div>
                    <button
                        type="button"
                        className="btn-custom btn-custom-outline-danger btn-custom-sm flex-shrink-0 align-self-start align-self-sm-center">
                        <i className="bi bi-trash3"></i>
                        Delete
                    </button>
                </div>
            </div>

            {/* ================= Edit Profile Modal ================= */}
            <div className="modal fade" id="editProfileModal" tabIndex={-1} aria-labelledby="editProfileModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 p-2">
                        <div className="modal-header border-0 pb-0">
                            <div>
                                <h5 className="modal-title fw-bold" id="editProfileModalLabel">Edit Personal Information</h5>
                                <p className="mb-0 small text-secondary">
                                    Update your details to keep your profile up-to-date.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div className="modal-body pt-3">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editFirstName">First Name</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editFirstName"
                                        placeholder="First name"
                                        defaultValue="Rejuan" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editLastName">Last Name</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editLastName"
                                        placeholder="Last name"
                                        defaultValue="Ahamed" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editEmail">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control-custom"
                                        id="editEmail"
                                        placeholder="Email address"
                                        defaultValue="rejuan@lumioadmin.com" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editPhone">Phone</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editPhone"
                                        placeholder="Phone number"
                                        defaultValue="+880 1712 345 678" />
                                </div>

                                <div className="col-12">
                                    <label className="form-label-custom" htmlFor="editBio">Bio</label>
                                    <textarea
                                        className="form-control-custom"
                                        id="editBio"
                                        rows="3"
                                        placeholder="Short bio about you"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button
                                type="button"
                                className="btn-custom btn-custom-light"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn-custom btn-custom-primary"
                                data-bs-dismiss="modal">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Edit Address Modal ================= */}
            <div className="modal fade" id="editAddressModal" tabIndex={-1} aria-labelledby="editAddressModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 p-2">
                        <div className="modal-header border-0 pb-0">
                            <div>
                                <h5 className="modal-title fw-bold" id="editAddressModalLabel">Edit Address</h5>
                                <p className="mb-0 small text-secondary">
                                    Update your details to keep your profile up-to-date.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div className="modal-body pt-3">
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editCountry">Country</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editCountry"
                                        placeholder="Country"
                                        defaultValue="Bangladesh" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editCityState">City/State</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editCityState"
                                        placeholder="City/State"
                                        defaultValue="Dhaka" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editPostalCode">Postal Code</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editPostalCode"
                                        placeholder="Postal code"
                                        defaultValue="1216" />
                                </div>

                                <div className="col-12 col-sm-6">
                                    <label className="form-label-custom" htmlFor="editTaxId">TAX ID</label>
                                    <input
                                        type="text"
                                        className="form-control-custom"
                                        id="editTaxId"
                                        placeholder="TAX ID"
                                        defaultValue="BIN-0011223344" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button
                                type="button"
                                className="btn-custom btn-custom-light"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn-custom btn-custom-primary"
                                data-bs-dismiss="modal">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= Change Password Modal ================= */}
            <div className="modal fade" id="changePasswordModal" tabIndex={-1} aria-labelledby="changePasswordModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content rounded-4 p-2">
                        <div className="modal-header border-0 pb-0">
                            <div>
                                <h5 className="modal-title fw-bold" id="changePasswordModalLabel">Change Password</h5>
                                <p className="mb-0 small text-secondary">
                                    Use a strong password to protect your account.
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div className="modal-body pt-3">
                            <div className="d-flex flex-column gap-3">
                                <div>
                                    <label className="form-label-custom" htmlFor="currentPassword">Current Password</label>
                                    <input
                                        type="password"
                                        className="form-control-custom"
                                        id="currentPassword"
                                        placeholder="Enter current password" />
                                </div>

                                <div>
                                    <label className="form-label-custom" htmlFor="newPassword">New Password</label>
                                    <input
                                        type="password"
                                        className="form-control-custom"
                                        id="newPassword"
                                        placeholder="Enter new password" />
                                </div>

                                <div>
                                    <label className="form-label-custom" htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control-custom"
                                        id="confirmPassword"
                                        placeholder="Confirm new password" />
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer border-0 pt-0">
                            <button
                                type="button"
                                className="btn-custom btn-custom-light"
                                data-bs-dismiss="modal">
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn-custom btn-custom-primary"
                                data-bs-dismiss="modal">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Profiles;
