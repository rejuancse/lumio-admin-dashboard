import { useState } from 'react';
import className from 'classnames';

function Alert({
    children,
    close,
    primary,
    success,
    danger,
    warning,
    info,
    ...rest
}) {
    const [visible, setVisible] = useState(true);

    const classes = className(
        rest.className,
        'alert-custom',
        {
            'alert-custom-primary': primary,
            'alert-custom-success': success,
            'alert-custom-danger': danger,
            'alert-custom-warning': warning,
            'alert-custom-info': info
        }
    );

    const handleClose = () => {
        setVisible(false);
    }

    if (!visible) return null;

    return (
        <div {...rest} className={classes}>
            <div className="alert-custom-content">{children}</div>

            { close && (
                    <button
                        className="alert-custom-close"
                        type="button"
                        aria-label="Close"
                        onClick={handleClose}>
                        <i className="bi bi-x-lg"></i>
                    </button>
                )
            }
        </div>
    )
}

export default Alert;
