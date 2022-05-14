import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);
const Button = ({
    disabled = false,
    //types
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    //sizes - default: medium
    small = false,
    large = false,
    //attributes - define Component
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
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                console.log('hello');
                delete props[key];
            }
        });
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large,
    });
    return (
        <Component className={classes} {...props}>
            {/* {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} */}
            <span className={cx('title')}>{children}</span>
        </Component>
    );
};

export default Button;
