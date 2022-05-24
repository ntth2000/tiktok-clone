import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
const AccountItem = ({ data }) => {
    return (
        <Link className={cx('wrapper')} to={`/@${data.nickname}`}>
            <Image src={data.avatar} alt="name" className={cx('avatar')} />
            <div className={cx('info')}>
                <h4 className={cx('heading')}>
                    <span className={cx('name')}>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />}{' '}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
};

export default AccountItem;
