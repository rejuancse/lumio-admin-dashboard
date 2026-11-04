import className from 'classnames';

function Button({
    children,
    primary = false,
    secondary = false,
    light = false,
    success = false,
    danger = false,
    warning = false,
    outline = false,
    rounded = false,
    small = false,
    ...rest
}) {
    const classes = className(
        rest.className,
        'btn btn-custom',
        {
            'btn-custom-primary': primary,
            'btn-custom-secondary': secondary,
            'btn-custom-light': light,
            'btn-success': success,
            'btn-custom-warning': warning,
            'btn-custom-danger': danger,
            'btn-custom-outline-primary': primary && outline,
            'btn-custom-outline-secondary': secondary && outline,
            'btn-custom-outline-danger': danger && outline,
            'rounded-pill': rounded,
            'btn-custom-sm': small
        }
    );

    return (
        <button {...rest} className={classes}>
            {children}
        </button>
    );
}

Button.propTypes = {
    checkVariationValue: ({
        primary,
        secondary,
        success,
        warning,
        danger
    }) => {
        const count =
            Number(!!primary) +
            Number(!!secondary) +
            Number(!!warning) +
            Number(!!success) +
            Number(!!danger);

        if (count > 1) {
            return new Error(
                'Only one of primary, secondary, success, warning, danger can be true'
            );
        }
    },
};

export default Button;
