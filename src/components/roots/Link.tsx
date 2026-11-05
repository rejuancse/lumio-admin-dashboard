import classNames from 'classnames';
import useNavigation from '../../hooks/useNavigation';

interface LinkProps {
    to: string;
    children;
    className?: string;
    activeClassName?: string;
    target?: string;
}

function Link({
    to,
    children,
    className,
    activeClassName,
    target
}: LinkProps) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        className,
        currentPath === to && activeClassName
    )

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // target="_blank" hole browser ke notun tab e kholte dao (SPA navigation baad)
        if (target === '_blank') {
            return;
        }
        if( e.metaKey || e.ctrlKey ) {
            return
        }
        e.preventDefault();
        navigate(to);
    }

    return (
        <li className="sidebar-menu-item">
            <a
                href={to}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className={classes} onClick={handleClick}>
                {children}
            </a>
        </li>
    )
}

export default Link;
