import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({ placement = 'bottom', items = [], onChange = defaultFn, hideOnClick = false, children }) => {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    data={item}
                    key={index}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBack = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    const handleReturnToFirstPage = () => {
        setHistory((prev) => [prev[0]]);
    };

    return (
        <Tippy
            offset={[12, 12]}
            delay={[0, 600]}
            hideOnClick={hideOnClick}
            interactive={true}
            placement={placement}
            render={renderResult}
            onHide={handleReturnToFirstPage}
        >
            {children}
        </Tippy>
    );
};

Menu.propTypes = {
    placement: PropTypes.string,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
    children: PropTypes.node.isRequired,
};

export default Menu;
