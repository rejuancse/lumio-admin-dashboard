// import { useEffect } from "react";
// import Button from "./Button";
// import avatarImg from "../assets/images/avatar.png";

function Header() {
    // const [sidebarMinimized, setSidebarMinimized] = useState(
    //     () => document.body.classList.contains('sidebar-minimized')
    // );
    // const [isFullscreen, setIsFullscreen] = useState(false);

    // const handleDesktopToggle = () => {
    //     // CSS in index.css (.sidebar-minimized) collapses the sidebar to icon-only
    //     const isMinimized = document.body.classList.toggle('sidebar-minimized');
    //     setSidebarMinimized(isMinimized);

    //     // Let ApexCharts redraw after the 0.3s width transition
    //     setTimeout(() => {
    //         window.dispatchEvent(new Event('resize'));
    //     }, 300);
    // };

    // const handleFullscreenToggle = () => {
    //     if (!document.fullscreenElement) {
    //         document.documentElement.requestFullscreen().catch((err) => {
    //             console.error(`Error attempting to enable fullscreen mode: ${err.message}`);
    //         });
    //     } else {
    //         document.exitFullscreen().catch((err) => {
    //             console.error(`Error attempting to exit fullscreen mode: ${err.message}`);
    //         });
    //     }
    // };

    // Sync icon when fullscreen changes from anywhere (e.g. Esc key)
    // useEffect(() => {
    //     const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    //     document.addEventListener('fullscreenchange', onFullscreenChange);
    //     return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
    // }, []);

    return (
        <header className="navbar-custom">
            <div className="navbar-left">
                <button className="btn-desktop-toggle d-none d-xl-flex align-items-center justify-content-center me-3" id="desktop-sidebar-toggle" aria-label="Minimize Sidebar">
                <i className="bi bi-chevron-bar-left"></i>
                </button>
                <button className="sidebar-toggle-btn me-2" id="sidebar-toggle" aria-label="Toggle Navigation">
                <i className="bi bi-list"></i>
                </button>

                <div className="dropdown ms-2">
                <button className="btn-quick-action dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="quick-actions-dropdown">
                    <i className="bi bi-plus-lg"></i>
                    <span>Create</span>
                </button>
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
                <input type="text" className="navbar-search-input" placeholder="Search anything in Maroon..." id="main-search" />
                <button className="navbar-search-btn" aria-label="Search">
                <i className="bi bi-search"></i>
                </button>
            </div>

            <div className="navbar-actions">
                <button className="navbar-action-btn me-1" aria-label="Toggle Fullscreen" id="btn-fullscreen">
                <i className="bi bi-arrows-fullscreen"></i>
                </button>
                <div className="dropdown">
                <button className="navbar-action-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="btn-notifications" data-bs-auto-close="outside">
                    <i className="bi bi-bell"></i>
                    <span className="navbar-action-badge"></span>
                </button>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-notification p-0" aria-labelledby="btn-notifications">
                    <div className="notification-header">
                    <h6 className="notification-title">Notifications</h6>
                    <button className="btn-clear-all" type="button">Mark all read</button>
                    </div>
                    <div className="notification-list">
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
                    </div>
                    <a href="#" className="notification-footer">View All Notifications</a>
                </div>
                </div>

                <div className="dropdown ms-2">
                    <button className="navbar-profile-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="profile-dropdown">
                        {/* <img src="assets/images/avatar.png" alt="Profile Image" className="navbar-profile-img"> */}
                        <span className="navbar-profile-name d-none d-md-inline">Administrator</span>
                        <i className="bi bi-chevron-down navbar-profile-caret"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-profile" aria-labelledby="profile-dropdown">
                        <li><a className="dropdown-item text-danger" href="page-login.html"><i className="bi bi-box-arrow-right"></i>
                            Logout</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
