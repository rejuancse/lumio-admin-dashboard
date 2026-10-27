import Link from "./Link";
import Profile from './Profile';

function Sidebar() {
    const links = [
        {label: 'Dashboard', icon: 'bi bi-grid-fill', path: '/'},
        {label: 'Basic Tables', icon: 'bi bi-table', path: '/basic-tables'},
        // {label: 'Form & Input', icon: 'bi bi-input-cursor-text', path: '/form-input'},
        {label: 'Buttons & Alerts', icon: 'bi bi-menu-button-wide-fill', path: '/buttons-alerts'},
        // {label: 'Blank Page', icon: 'bi bi-file-earmark', path: '/blank-page'},
        // {label: 'Login Screen', icon: 'bi bi-box-arrow-in-right', path: '/login-screen'},
        // {label: 'Error 404', icon: 'bi bi-slash-circle', path: '/error-page'},
    ];

    const renderedLinks = links.map( (link) => {
        return (
            <Link
                key={link.label}
                to={link.path}
                className="sidebar-menu-link"
                activeClassName="active">
                <i className={link.icon}></i>
                <span>{link.label}</span>
            </Link>
        );
    })

    return (
        <div className="sidebar-wrapper" id="sidebar">
            <a href="index.html" className="sidebar-brand">
                <i className="bi bi-asterisk"></i>
                <span>Lumio Admin</span>
            </a>

            <div className="flex-grow-1 overflow-y-auto">
                <div className="sidebar-menu-section">
                    <div className="sidebar-menu-title">Menu</div>
                    <ul className="sidebar-menu-list">
                        {renderedLinks}
                    </ul>
                </div>
            </div>

            <Profile name="Administrator" email="admin@email.com" />
        </div>
    )
}

export default Sidebar;
