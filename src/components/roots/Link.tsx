import classNames from 'classnames';
import useNavigation from '../../hooks/useNavigation';

export default function Link({to, children, className, activeClassName}) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        className,
        currentPath === to && activeClassName
    )

    const handleClick = (e) => {
        if( e.metakey || e.ctrlKey ) {
            return
        }
        e.preventDefault();
        navigate(to);
    }

    return (
        <li className="sidebar-menu-item">
            <a
                href={to}
                className={classes} id="menu-basictables" onClick={handleClick}>
                {children}
            </a>
        </li>
    )
}