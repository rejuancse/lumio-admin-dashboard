import { useState } from "react";
import useNavigation from '../hooks/useNavigation';

function RegisterNow () {
    const { navigate } = useNavigation();

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errors, setErrors] = useState({});

    /* Password strength: 0-4 score mapped to meter width & color */
    const getPasswordStrength = () => {
        if (!password) return 0;

        let score = 0;
        if (password.length >= 6) score++;
        if (password.length >= 10) score++;
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
        if (/\d/.test(password)) score++;
        if (/[^A-Za-z0-9]/.test(password)) score++;

        return Math.min(score, 4);
    };

    const STRENGTH_LEVELS = {
        1: { width: "w-25", bar: "bg-danger", label: "Weak", text: "text-danger" },
        2: { width: "w-50", bar: "bg-warning", label: "Fair", text: "text-warning" },
        3: { width: "w-75", bar: "bg-success", label: "Good", text: "text-success" },
        4: { width: "w-100", bar: "bg-success", label: "Strong", text: "text-success" },
    };

    const strength = getPasswordStrength();
    const strengthMeta = STRENGTH_LEVELS[strength];

    const validateForm = () => {
        const newErrors = {};

        if (!fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        if (!email.trim()) {
            newErrors.email = "Email address is required";
        } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
        ) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password =
                "Password must be at least 6 characters";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (confirmPassword !== password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        if (!agreeTerms) {
            newErrors.agreeTerms = "You must agree to the Terms & Conditions";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        // Demo registration: successful validation redirects to login screen
        navigate("/login-screen", { replace: true });
    };

    return (
        <div className="login-wrapper">
            <div className="login-bg-shape login-bg-shape-1"></div>
            <div className="login-bg-shape login-bg-shape-2"></div>

            <div className="login-card">
                <a href="/" className="login-brand text-decoration-none">
                    <i className="bi bi-asterisk"></i>
                    <span>Lumio Admin</span>
                </a>

                <h1 className="login-title">Create Your Account</h1>
                <p className="login-subtitle">
                    Join Lumio Admin and start managing your dashboard in minutes
                </p>

                <div className="login-divider">Register with email</div>

                <form
                    id="registerForm"
                    className="needs-validation"
                    noValidate
                    onSubmit={handleSubmit} >

                    <div className="login-form-group">
                        <label htmlFor="fullName" className="login-form-label">Full Name</label>
                        <div className="login-input-group">
                            <i className="bi bi-person input-icon"></i>
                            <input
                                type="text"
                                id="fullName"
                                className={`login-input ${ errors.fullName ? "is-invalid" : "" }`}
                                placeholder="John Doe"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        fullName: "",
                                    }));
                                }}
                                autoComplete="name"
                            />
                        </div>
                        {errors.fullName && (
                            <small className="text-danger">
                                {errors.fullName}
                            </small>
                        )}
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="email" className="login-form-label">Email Address</label>
                        <div className="login-input-group">
                            <i className="bi bi-envelope input-icon"></i>
                            <input
                                type="email"
                                id="email"
                                className={`login-input ${ errors.email ? "is-invalid" : "" }`}
                                placeholder="name@company.com"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        email: "",
                                    }));
                                }}
                                autoComplete="email"
                            />
                        </div>
                        {errors.email && (
                            <small className="text-danger">
                                {errors.email}
                            </small>
                        )}
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="password" className="login-form-label">Password</label>
                        <div className="login-input-group">
                            <i className="bi bi-shield-lock input-icon"></i>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className={`login-input login-input-password ${ errors.password ? "is-invalid" : "" }`}
                                placeholder="Create a strong password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        password: "",
                                    }));
                                }}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="password-toggle-btn"
                                aria-label={
                                    showPassword
                                        ? "Hide password"
                                        : "Show password"
                                }
                                onClick={() => setShowPassword((prev) => !prev) }
                                >
                                <i className={`bi ${
                                    showPassword ? "bi-eye-slash" : "bi-eye"
                                }`} ></i>
                            </button>
                        </div>

                        {password && strengthMeta && (
                            <div className="d-flex align-items-center gap-2 mt-2" aria-live="polite">
                                <div
                                    className="progress flex-grow-1"
                                    role="progressbar"
                                    aria-label="Password strength"
                                    aria-valuenow={strength}
                                    aria-valuemin="0"
                                    aria-valuemax="4">
                                    <div className={`progress-bar ${strengthMeta.bar} ${strengthMeta.width}`}></div>
                                </div>
                                <small className={`fw-bold ${strengthMeta.text}`}>
                                    {strengthMeta.label}
                                </small>
                            </div>
                        )}

                        {errors.password && (
                            <small className="text-danger d-block mt-1">
                                {errors.password}
                            </small>
                        )}
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="confirmPassword" className="login-form-label">Confirm Password</label>
                        <div className="login-input-group">
                            <i className="bi bi-lock input-icon"></i>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                className={`login-input login-input-password ${ errors.confirmPassword ? "is-invalid" : "" }`}
                                placeholder="Re-enter your password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        confirmPassword: "",
                                    }));
                                }}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="password-toggle-btn"
                                aria-label={
                                    showConfirmPassword
                                        ? "Hide confirm password"
                                        : "Show confirm password"
                                }
                                onClick={() => setShowConfirmPassword((prev) => !prev) }
                                >
                                <i className={`bi ${
                                    showConfirmPassword ? "bi-eye-slash" : "bi-eye"
                                }`} ></i>
                            </button>
                        </div>

                        {errors.confirmPassword && (
                            <small className="text-danger">
                                {errors.confirmPassword}
                            </small>
                        )}
                    </div>

                    <div className="login-form-group">
                        <label htmlFor="agreeTerms" className="custom-control-label flex-wrap">
                            <input
                                type="checkbox"
                                className="custom-checkbox-input"
                                id="agreeTerms"
                                checked={agreeTerms}
                                onChange={(e) => {
                                    setAgreeTerms(e.target.checked);
                                    setErrors((prev) => ({
                                        ...prev,
                                        agreeTerms: "",
                                    }));
                                }}
                            />
                            <span>
                                I agree to the
                                <a href="/login-screen" className="forgot-password-link mx-1">Terms of Service</a>
                                and
                                <a href="/login-screen" className="forgot-password-link ms-1">Privacy Policy</a>
                            </span>
                        </label>
                        {errors.agreeTerms && (
                            <small className="text-danger d-block mt-1">
                                {errors.agreeTerms}
                            </small>
                        )}
                    </div>

                     <button
                        type="submit"
                        className="btn-login"
                        id="btn-register"
                        >
                        <span>Create Account</span>

                        <i className="bi bi-arrow-right"></i>
                    </button>
                </form><br />

                <p className="login-footer-text">
                    Already have an account?
                    <a href="/login-screen" id="link-login">Sign In</a>
                </p>
            </div>
        </div>
    )
}

export default RegisterNow;
