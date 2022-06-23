import classNames from 'classnames/bind';
import { ChervonLeft } from '~/components/Icons';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

const Header = ({ title, onBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('header-icon')} onClick={onBack}>
                <ChervonLeft />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
