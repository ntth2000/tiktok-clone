import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    disabled = false,
    //types: primary, outline, text, rounded
    type = [],
    //sizes:s, m, l - default: medium
    size,
    //attributes - define Component: button, a, Link - default: button
    to,
    href,
    //icons
    leftIcon,
    rightIcon,
    //event listeners
    onClick,
    children,
    className,
    ...passProps
}) => {
    let Component = 'button';

    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    }
    if (href) {
        props.href = href;
        Component = 'a';
    }

    //if button is disabled => delete all event listeners
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', ...type, {
        [className]: className,
        [size]: size,
        disabled,
    });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
};
Button.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.array,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']),
    disabled: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
};
export default Button;
