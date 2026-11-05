import { useState } from 'react';
import Link from "./roots/Link";
import avatarImg from "../assets/images/avatar.png";

function Sidebar() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const links = [
        {
            label: 'Dashboard',
            icon: 'bi bi-grid-fill',
            path: '/',
            submenu: [
                {
                    label: 'Default',
                    icon: 'bi bi-mouse2-fill',
                    path: '/'
                },
                {
                    label: 'Ecommerce',
                    icon: 'bi bi-bell-fill',
                    path: '/ecommerce'
                },
            ]
        },
        {label: 'Basic Tables', icon: 'bi bi-table', path: '/basic-tables'},
        {
            label: 'Buttons & Alerts',
            icon: 'bi bi-menu-button-wide-fill',
            path: '/default-buttons',
            submenu: [
                {label: 'Buttons', icon: 'bi bi-mouse2-fill', path: '/default-buttons'},
                {label: 'Alerts', icon: 'bi bi-bell-fill', path: '/default-alerts'},
            ],
        },
        {
            label: 'Auth Pages',
            icon: 'bi bi-box-arrow-in-right',
            submenu: [
                {
                    label: 'Login Screen',
                    icon: 'bi bi-box-arrow-in-right',
                    path: '/login-screen',
                    target: '_blank'
                },
                {
                    label: 'Register',
                    icon: 'bi bi-person-plus-fill',
                    path: '/register-now',
                    target: '_blank'
                },
            ],
        },
        // {label: 'Form & Input', icon: 'bi bi-input-cursor-text', path: '/form-input'},
        // {label: 'Blank Page', icon: 'bi bi-file-earmark', path: '/blank-page'},
        // {label: 'Error 404', icon: 'bi bi-slash-circle', path: '/error-page'},
        // {
        //     label: 'Profiles',
        //     name: 'Administrator',
        //     email: 'admin@email.com',
        //     path: '/profiles'
        // },
    ];

    const toggleSubmenu = (label: string) => {
        setOpenMenu(openMenu === label ? null : label);
    };

    const renderedLinks = links.map( (link) => {
        if (link.submenu) {
            const isOpen = openMenu === link.label;
            return (
                <li className="sidebar-menu-item" key={link.label}>
                    <button
                        type="button"
                        className="sidebar-menu-link"
                        aria-expanded={isOpen}
                        onClick={() => toggleSubmenu(link.label)}>
                        <i className={link.icon}></i>
                        <span>{link.label}</span>
                        <i className="bi bi-chevron-down dropdown-caret"></i>
                    </button>
                    {isOpen && (
                        <ul className="sidebar-submenu">
                            {link.submenu.map( (sub) => {
                                return (
                                    <Link
                                        key={sub.label}
                                        to={sub.path}
                                        target={sub.target}
                                        className="sidebar-submenu-link"
                                        activeClassName="active">
                                        <i className={sub.icon}></i>
                                        <span>{sub.label}</span>
                                    </Link>
                                );
                            })}
                        </ul>
                    )}
                </li>
            );
        }

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

            <div>
                <a href="/profiles">
                    <div className="sidebar-profile">
                        <img
                            src={avatarImg}
                            alt="Administrator"
                            className="sidebar-profile-img"
                        />
                        <div className="sidebar-profile-info">
                            <div className="sidebar-profile-name">Administrator</div>
                            <div className="sidebar-profile-email">admin@email.com</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;
