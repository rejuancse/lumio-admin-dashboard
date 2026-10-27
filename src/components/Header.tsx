import { useEffect, useState } from "react";
import Button from "./Button";
import avatarImg from "../assets/images/avatar.png";

function Header() {
    const [sidebarMinimized, setSidebarMinimized] = useState(
        () => document.body.classList.contains('sidebar-minimized')
    );
    const [isFullscreen, setIsFullscreen] = useState(false);

    const handleDesktopToggle = () => {
        // CSS in index.css (.sidebar-minimized) collapses the sidebar to icon-only
        const isMinimized = document.body.classList.toggle('sidebar-minimized');
        setSidebarMinimized(isMinimized);

        // Let ApexCharts redraw after the 0.3s width transition
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };

    const handleFullscreenToggle = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
            });
        } else {
            document.exitFullscreen().catch((err) => {
                console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
            });
        }
    };

    // Sync icon when fullscreen changes from anywhere (e.g. Esc key)
    useEffect(() => {
        const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
        document.addEventListener('fullscreenchange', onFullscreenChange);
        return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    }, []);

    return (
        <header className="navbar-custom">
            <div className="navbar-left">
                <Button
                    outline
                    className="btn-desktop-toggle"
                    id="desktop-sidebar-toggle"
                    aria-label="Toggle Sidebar"
                    aria-expanded={!sidebarMinimized}
                    onClick={handleDesktopToggle}
                >
                    <i className={sidebarMinimized ? "bi bi-chevron-bar-right" : "bi bi-chevron-bar-left"}></i>
                </Button>

                {/* <Button className="sidebar-toggle-btn me-2" id="sidebar-toggle" aria-label="Toggle Navigation">
                    <i className="bi bi-list"></i>
                </Button> */}

                <div className="dropdown ms-2">
                    <Button primary>
                        <i className="bi bi-plus-lg"></i>
                        Create
                    </Button>

                    <ul className="dropdown-menu dropdown-menu-quick-action" aria-labelledby="quick-actions-dropdown">
                        <li className="dropdown-header">Quick Action Shortcuts</li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-file-earmark-plus"></i> New Invoice</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person-plus"></i> New User</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-box-seam"></i> New Product</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> System Settings</a></li>
                    </ul>
                </div>
            </div>

            <div className="navbar-search-wrapper">
                <input type="text" className="navbar-search-input" placeholder="Search anything in Lumio..." id="main-search" />
                <Button className="navbar-search-btn"><i className="bi bi-search"></i></Button>
            </div>

            <div className="navbar-actions">
                <button
                    className="navbar-action-btn me-1"
                    aria-label="Toggle Fullscreen"
                    id="btn-fullscreen"
                    onClick={handleFullscreenToggle}
                >
                    <i className={isFullscreen ? "bi bi-fullscreen-exit" : "bi bi-arrows-fullscreen"}></i>
                </button>
                <div className="dropdown">
                    <button className="navbar-action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false" id="btn-notifications" data-bs-auto-close="outside">
                        <i className="bi bi-bell"></i>
                        <span className="navbar-action-badge"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-notification p-0"
                        aria-labelledby="btn-notifications">
                        <div className="notification-header">
                            <h6 className="notification-title">Notifications</h6>
                            <button className="btn-clear-all" type="button">Mark all read</button>
                        </div>
                        <div className="notification-list">
                            {/* Sale Notification */}
                            <a href="#" className="notification-item">
                                <div className="notification-icon bg-success text-white">
                                    <i className="bi bi-wallet2"></i>
                                </div>
                                <div className="notification-content">
                                    <p className="notification-text">New sale received: <strong>$150.00</strong></p>
                                    <span className="notification-time">2 mins ago</span>
                                </div>
                                <span className="notification-unread-dot"></span>
                            </a>
                            {/* User Registration Notification */}
                            <a href="#" className="notification-item">
                                <div className="notification-icon bg-primary text-white">
                                    <i className="bi bi-person-plus-fill"></i>
                                </div>
                                <div className="notification-content">
                                    <p className="notification-text">New user registered: <strong>John Doe</strong></p>
                                    <span className="notification-time">1 hour ago</span>
                                </div>
                                <span className="notification-unread-dot"></span>
                            </a>
                            {/* Low Stock Notification */}
                            <a href="#" className="notification-item">
                                <div className="notification-icon bg-warning text-dark">
                                    <i className="bi bi-box-seam-fill"></i>
                                </div>
                                <div className="notification-content">
                                    <p className="notification-text">Stock running low: <strong>Hoodie</strong></p>
                                    <span className="notification-time">3 hours ago</span>
                                </div>
                            </a>
                        </div>
                        <a href="#" className="notification-footer">View All Notifications</a>
                    </div>
                </div>

                {/* Profile Dropdown */}
                <div className="dropdown ms-2">
                    <Button className="navbar-profile-btn dropdown-toggle" id="profile-dropdown" data-bs-toggle="dropdown">
                        <img src={avatarImg} className="navbar-profile-img" alt="Administrator" />
                        Administrator
                        <i className="bi bi-chevron-down navbar-profile-caret"></i>
                    </Button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-profile" aria-labelledby="profile-dropdown">
                        <li className="dropdown-header">Welcome !</li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-person"></i> My Account</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-gear"></i> Settings</a></li>
                        <li><a className="dropdown-item" href="#"><i className="bi bi-lock"></i> Lock Screen</a></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item text-danger" href="page-login.html">
                                <i className="bi bi-box-arrow-right"></i>
                                Logout
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
