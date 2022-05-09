import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                src="https://i.pinimg.com/564x/5e/54/21/5e5421d1a4786bba528306c7c4e982ab.jpg"
                alt="name"
                className={cx('avatar')}
            />
            <div className={cx('info')}>
                <h4 className={cx('heading')}>
                    <span className={cx('name')}>abcdabcdabcdabcd</span>
                    <FontAwesomeIcon icon={faCheckCircle} className={cx('icon')} />
                </h4>
                <span className={cx('username')}>abcdabcdabcdabcd</span>
            </div>
        </div>
    );
};

export default AccountItem;
