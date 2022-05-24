import { useEffect, useState } from 'react';

import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faEllipsisVertical, faSpinner } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import {
    Coin,
    Gear,
    InboxIcon,
    Keyboard,
    Language,
    LogOut,
    MsgIcon,
    Question,
    SearchIcon,
    UploadIcon,
    User,
} from '~/components/Icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <Language />,
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
        icon: <Question />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <Keyboard />,
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
            icon: <User />,
            title: 'View profile',
            to: '/huyen',
        },
        {
            icon: <Coin />,
            title: 'Get coins',
            to: '/',
        },
        {
            icon: <Gear />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <LogOut />,
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
                            <SearchIcon />
                        </div>
                    </div>
                </TippyHeadless>
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy placement="bottom" delay={[0, 200]} content="Upload video" arrow={true}>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" delay={[0, 200]} content="Message">
                                <button className={cx('action-btn')}>
                                    <MsgIcon />
                                </button>
                            </Tippy>
                            <Tippy placement="bottom" delay={[0, 200]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />{' '}
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
                            <Image
                                src="https://ww.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
                                className={cx('user-avatar')}
                                alt="avatar"
                                fallback="https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=1024"
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
