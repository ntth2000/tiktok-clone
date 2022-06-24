import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ChevronLeft } from '~/components/Icons';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('header-icon')} onClick={onBack}>
                <ChevronLeft />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};
Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};
export default Header;
