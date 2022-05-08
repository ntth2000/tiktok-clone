import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>
                <div className={cx('search')}>
                    <input
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        className={cx('search-input')}
                    />
                    <button className={cx('clear-btn')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <button className={cx('loading-btn')}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                    <div className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </div>
                <div className={cx('actions')}>actions</div>
            </div>
        </header>
    );
};

export default Header;
