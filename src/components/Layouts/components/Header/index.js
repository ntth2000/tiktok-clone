import { useEffect, useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faMessage, faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
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
    let currentUser = true;
    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([]);
        // }, 1000);
    });
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/huyen',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            separated: true,
        },
    ];
    const handleMenuChange = (item) => {
        switch (item.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <a href="/">
                        <img src={images.logo} alt="Tiktok" />
                    </a>
                </div>
                <TippyHeadless
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
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" delay={[0, 200]} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faCloudUpload} />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button type={['text']}>Upload</Button>
                            <Button
                                type={['primary']}
                                // className={cx('custom-login')}
                                // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                            >
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu
                        placement="bottom-end"
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <img
                                src="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
                                className={cx('user-avatar')}
                                alt="avatar"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
