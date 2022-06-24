import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
const MenuItem = ({ data, onClick }) => {
    return (
        <>
            {data.separated && <span className={cx('separated')}></span>}
            <Button leftIcon={data.icon} to={data.to} className={cx('menu-item')} onClick={onClick}>
                {data.title}
            </Button>
        </>
    );
};
MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
