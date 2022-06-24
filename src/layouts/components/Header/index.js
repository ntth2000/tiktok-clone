import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

import images from '~/assets/images';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

import config from '~/configs';
import {
    Coin,
    Gear,
    InboxIcon,
    Keyboard,
    Language,
    LogOut,
    MsgIcon,
    Question,
    UploadIcon,
    User,
} from '~/components/Icons';

import Image from '~/components/Image';
import Search from '../Search';

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
    let currentUser = true;

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
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />
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
                                    <InboxIcon />
                                    <span className={cx('badge')}>23</span>
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
