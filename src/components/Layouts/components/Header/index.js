import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const Header = () => {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([]);
        // }, 1000);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    placement="bottom-start"
                    render={(attrs) => (
                        <div className="box" tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h3 className={cx('search-title')}>Accounts</h3>
                                <ul className={cx('search-result')}>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </ul>
                            </PopperWrapper>
                        </div>
                    )}
                >
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button>Upload</Button>
                    <Button
                        type={['rounded', 'primary']}
                        // className={cx('custom-login')}
                        // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                    >
                        Log in
                    </Button>
                    <Menu placement="bottom-end" items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
