import { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';
import avatarImg from '../assets/images/avatar.png';
import profileData from '../json-files/profile.json';

// Build form state from the currently displayed data
const buildFormState = (editFields, sourceFields) =>
    Object.fromEntries(
        editFields.map((field) => [
            field.name,
            sourceFields.find((item) => item.label === field.label)?.value || ''
        ])
    );

function Profile() {
    // Display data (initialized from the static JSON, updated via state)
    const [profile, setProfile] = useState(profileData.profile);
    const [personalInfo, setPersonalInfo] = useState(profileData.personalInfo);
    const [addressInfo, setAddressInfo] = useState(profileData.addressInfo);

    // Keep the latest display data accessible inside one-time modal event listeners
    const personalInfoRef = useRef(personalInfo);
    const addressInfoRef = useRef(addressInfo);
    personalInfoRef.current = personalInfo;
    addressInfoRef.current = addressInfo;

    // Edit Personal Information form
    const [personalForm, setPersonalForm] = useState(() =>
        buildFormState(profileData.editPersonalFields, profileData.personalInfo));
    const [personalErrors, setPersonalErrors] = useState({});

    // Edit Address form
    const [addressForm, setAddressForm] = useState(() =>
        buildFormState(profileData.editAddressFields, profileData.addressInfo));
    const [addressErrors, setAddressErrors] = useState({});

    // Change Password form
    const [passwordForm, setPasswordForm] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [passwordErrors, setPasswordErrors] = useState({});

    // Re-sync the edit forms with the current data every time a modal opens,
    // so unsaved changes are discarded when the modal is cancelled and re-opened
    useEffect(() => {
        const personalModal = document.getElementById('editProfileModal');
        const addressModal = document.getElementById('editAddressModal');

        const handlePersonalShow = () => {
            setPersonalForm(buildFormState(profileData.editPersonalFields, personalInfoRef.current));
            setPersonalErrors({});
        };
        const handleAddressShow = () => {
            setAddressForm(buildFormState(profileData.editAddressFields, addressInfoRef.current));
            setAddressErrors({});
        };

        personalModal?.addEventListener('show.bs.modal', handlePersonalShow);
        addressModal?.addEventListener('show.bs.modal', handleAddressShow);

        return () => {
            personalModal?.removeEventListener('show.bs.modal', handlePersonalShow);
            addressModal?.removeEventListener('show.bs.modal', handleAddressShow);
        };
    }, []);

    const validatePersonalForm = () => {
        const newErrors = {};

        if (!personalForm.editFirstName.trim()) {
            newErrors.editFirstName = 'First name is required';
        }

        if (!personalForm.editLastName.trim()) {
            newErrors.editLastName = 'Last name is required';
        }

        if (!personalForm.editEmail.trim()) {
            newErrors.editEmail = 'Email address is required';
        } else if (!/^\S+@\S+\.\S+$/.test(personalForm.editEmail.trim())) {
            newErrors.editEmail = 'Please enter a valid email address';
        }

        setPersonalErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validateAddressForm = () => {
        const newErrors = {};

        if (!addressForm.editCountry.trim()) {
            newErrors.editCountry = 'Country is required';
        }

        if (!addressForm.editCityState.trim()) {
            newErrors.editCityState = 'City/State is required';
        }

        setAddressErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validatePasswordForm = () => {
        const newErrors = {};
        const { currentPassword, newPassword, confirmPassword } = passwordForm;

        if (!currentPassword) {
            newErrors.currentPassword = 'Current password is required';
        }

        if (!newPassword) {
            newErrors.newPassword = 'New password is required';
        } else if (newPassword.length < 6) {
            newErrors.newPassword = 'New password must be at least 6 characters';
        } else if (currentPassword && newPassword === currentPassword) {
            newErrors.newPassword = 'New password must be different from the current password';
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your new password';
        } else if (newPassword && confirmPassword !== newPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setPasswordErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleFormChange = (setForm, setErrors, name, value) => {
        setForm((prev) => ({
            ...prev,
            [name]: value
        }));
        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }));
    };

    const handlePersonalSubmit = (e) => {
        e.preventDefault();

        if (!validatePersonalForm()) {
            return;
        }

        // Update the displayed personal info with the saved form values
        setPersonalInfo((prev) =>
            prev.map((field) => {
                const editField = profileData.editPersonalFields.find((f) => f.label === field.label);
                return editField ? { ...field, value: personalForm[editField.name] } : field;
            })
        );

        // Update the name shown in the profile summary (first + last name)
        setProfile((prev) => ({
            ...prev,
            name: `${personalForm.editFirstName.trim()} ${personalForm.editLastName.trim()}`.trim()
        }));

        const modalEl = document.getElementById('editProfileModal');
        if (modalEl) {
            Modal.getOrCreateInstance(modalEl).hide();
        }
    };

    const handleAddressSubmit = (e) => {
        e.preventDefault();

        if (!validateAddressForm()) {
            return;
        }

        // Update the displayed address info with the saved form values
        setAddressInfo((prev) =>
            prev.map((field) => {
                const editField = profileData.editAddressFields.find((f) => f.label === field.label);
                return editField ? { ...field, value: addressForm[editField.name] } : field;
            })
        );

        const modalEl = document.getElementById('editAddressModal');
        if (modalEl) {
            Modal.getOrCreateInstance(modalEl).hide();
        }
    };

    const handlePasswordSubmit = (e) => {
        e.preventDefault();

        if (!validatePasswordForm()) {
            return;
        }

        // Demo submit: reset the form and close the modal
        setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
        setPasswordErrors({});

        const modalEl = document.getElementById('changePasswordModal');
        if (modalEl) {
            Modal.getOrCreateInstance(modalEl).hide();
        }
    };

    return (
        <>
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
                        alt={profile.name}
                        width="72"
                        height="72"
                        className="rounded-4 object-fit-cover flex-shrink-0" />

                    <div>
                        <h3 className="fs-5 fw-bold mb-1">{profile.name}</h3>
                        <div className="d-flex flex-wrap align-items-center gap-2 small text-secondary">
                            <span>{profile.designation}</span>
                            <span aria-hidden="true">&bull;</span>
                            <span>{profile.location}</span>
                        </div>
                    </div>
                </div>

                {/* Personal fields */}
                <div className="row g-4 mb-4">
                    {personalInfo.map((field) => (
                        <div className={field.col} key={field.id}>
                            <p className="form-label-custom">{field.label}</p>
                            <p className="mb-0 fw-semibold">{field.value}</p>
                        </div>
                    ))}
                </div>

                {/* Social links */}
                <p className="form-label-custom">Social Links</p>
                <div className="d-flex flex-wrap align-items-center gap-2">
                    {profileData.socialLinks.map((link) => (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.label}
                            className="table-btn-action"
                            key={link.id}>
                            <i className={link.icon}></i>
                        </a>
                    ))}
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
                    {addressInfo.map((field) => (
                        <div className={field.col} key={field.id}>
                            <p className="form-label-custom">{field.label}</p>
                            <p className="mb-0 fw-semibold">{field.value}</p>
                        </div>
                    ))}
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
                                <h5 className="modal-title fw-bold" id="editProfileModalLabel">
                                    Edit Personal Information
                                </h5>
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

                        <form onSubmit={handlePersonalSubmit} noValidate>
                            <div className="modal-body pt-3">
                                <div className="row g-3">
                                    {profileData.editPersonalFields.map((field) => (
                                        <div className={field.col} key={field.id}>
                                            <label className="form-label-custom" htmlFor={field.name}>{field.label}</label>
                                            {field.type === 'textarea' ? (
                                                <textarea
                                                    className={`form-control-custom ${personalErrors[field.name] ? 'is-invalid-custom' : ''}`}
                                                    id={field.name}
                                                    placeholder={field.placeholder}
                                                    value={personalForm[field.name]}
                                                    onChange={(e) => handleFormChange(setPersonalForm, setPersonalErrors, field.name, e.target.value)}></textarea>
                                            ) : (
                                                <input
                                                    type={field.type}
                                                    className={`form-control-custom ${personalErrors[field.name] ? 'is-invalid-custom' : ''}`}
                                                    id={field.name}
                                                    placeholder={field.placeholder}
                                                    value={personalForm[field.name]}
                                                    onChange={(e) => handleFormChange(setPersonalForm, setPersonalErrors, field.name, e.target.value)} />
                                            )}
                                            {personalErrors[field.name] && (
                                                <small className="form-feedback-custom invalid-custom">
                                                    {personalErrors[field.name]}
                                                </small>
                                            )}
                                        </div>
                                    ))}
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
                                    type="submit"
                                    className="btn-custom btn-custom-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
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

                        <form onSubmit={handleAddressSubmit} noValidate>
                            <div className="modal-body pt-3">
                                <div className="row g-3">
                                    {profileData.editAddressFields.map((field) => (
                                        <div className={field.col} key={field.id}>
                                            <label className="form-label-custom" htmlFor={field.name}>{field.label}</label>
                                            <input
                                                type={field.type}
                                                className={`form-control-custom ${addressErrors[field.name] ? 'is-invalid-custom' : ''}`}
                                                id={field.name}
                                                placeholder={field.placeholder}
                                                value={addressForm[field.name]}
                                                onChange={(e) => handleFormChange(setAddressForm, setAddressErrors, field.name, e.target.value)} />
                                            {addressErrors[field.name] && (
                                                <small className="form-feedback-custom invalid-custom">
                                                    {addressErrors[field.name]}
                                                </small>
                                            )}
                                        </div>
                                    ))}
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
                                    type="submit"
                                    className="btn-custom btn-custom-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
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

                        <form onSubmit={handlePasswordSubmit} noValidate>
                            <div className="modal-body pt-3">
                                <div className="d-flex flex-column gap-3">
                                    {profileData.changePasswordFields.map((field) => (
                                        <div key={field.id}>
                                            <label className="form-label-custom" htmlFor={field.name}>{field.label}</label>
                                            <input
                                                type={field.type}
                                                className={`form-control-custom ${passwordErrors[field.name] ? 'is-invalid-custom' : ''}`}
                                                id={field.name}
                                                placeholder={field.placeholder}
                                                value={passwordForm[field.name]}
                                                autoComplete={field.name === 'currentPassword' ? 'current-password' : 'new-password'}
                                                onChange={(e) => {
                                                    const { value } = e.target;

                                                    setPasswordForm((prev) => ({
                                                        ...prev,
                                                        [field.name]: value
                                                    }));
                                                    setPasswordErrors((prev) => ({
                                                        ...prev,
                                                        [field.name]: ''
                                                    }));

                                                    // Re-validate confirm field as soon as the new password changes
                                                    if (field.name === 'newPassword') {
                                                        setPasswordErrors((prev) => ({
                                                            ...prev,
                                                            confirmPassword:
                                                                prev.confirmPassword === 'Passwords do not match'
                                                                    ? value !== passwordForm.confirmPassword
                                                                        ? 'Passwords do not match'
                                                                        : ''
                                                                    : prev.confirmPassword
                                                        }));
                                                    }
                                                }} />
                                            {passwordErrors[field.name] && (
                                                <small className="form-feedback-custom invalid-custom">
                                                    {passwordErrors[field.name]}
                                                </small>
                                            )}
                                        </div>
                                    ))}
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
                                    type="submit"
                                    className="btn-custom btn-custom-primary">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;
