import classNames from 'classnames/bind';
import {
    HomeIcon,
    HomeSolidIcon,
    LiveIcon,
    LiveSolidIcon,
    UserGroupIcon,
    UserGroupSolidIcon,
} from '~/components/Icons';
import config from '~/configs';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);
const Sidebar = () => {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeSolidIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupSolidIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveSolidIcon />} />
            </Menu>
        </aside>
    );
};

export default Sidebar;
