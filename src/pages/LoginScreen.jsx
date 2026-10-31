import { useState } from "react";
import useNavigation from '../hooks/useNavigation';

function LoginScreen () {
    const { navigate } = useNavigation();

    const DEMO_EMAIL = "admin@lumio.com";
    const DEMO_PASSWORD = "admin123";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

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

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
        return;
        }

        // Demo credential check
        if (email.trim() !== DEMO_EMAIL || password !== DEMO_PASSWORD) {
            setErrors((prev) => ({
                ...prev,
                password: "Invalid email or password",
            }));
            return;
        }

        // Demo login: successful validation redirects to "/"
        navigate("/", { replace: true });
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

                <p className="login-subtitle">Please sign in to access your dashboard</p>

                <div className="demo-credentials">
                    <i className="bi bi-info-circle"></i>
                    <div className="demo-credentials-text">
                        <strong>Demo Credentials</strong>
                        <span>Email: admin@lumio.com</span>
                        <span>Password: admin123</span>
                    </div>
                </div>

                <form
                    id="loginForm"
                    className="needs-validation"
                    onSubmit={handleSubmit} >

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
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrors((prev) => ({
                                        ...prev,
                                        password: "",
                                    }));
                                }}
                                autoComplete="current-password"
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

                        {errors.password && (
                            <small className="text-danger">
                                {errors.password}
                            </small>
                        )}
                    </div>

                    <div className="login-options">
                        <label className="custom-control-label">
                            <input
                                type="checkbox"
                                className="custom-checkbox-input"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={(e) =>
                                setRememberMe(e.target.checked)
                                }
                            />
                            <span>Remember Me</span>
                        </label>
                        <a
                            href="/forgot-password"
                            className="forgot-password-link"
                            >
                            Forgot Password?
                        </a>
                    </div>

                     <button
                        type="submit"
                        className="btn-login"
                        id="btn-submit"
                        >
                        <span>Sign In to Dashboard</span>

                        <i className="bi bi-arrow-right"></i>
                    </button>
                </form>

                <div className="login-divider">Or sign in with</div>

                <div className="social-login-grid">
                    <button className="btn-social" type="button" id="btn-google">
                        <i className="bi bi-google text-danger"></i>
                        <span>Google</span>
                    </button>
                    <button className="btn-social" type="button" id="btn-github">
                        <i className="bi bi-github"></i>
                        <span>GitHub</span>
                    </button>
                </div>

                <p className="login-footer-text">
                    Don't have an account? <a href="#" id="link-register">Register Now</a>
                </p>
            </div>
        </div>
    )
}

export default LoginScreen;
