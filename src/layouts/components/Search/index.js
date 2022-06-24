import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import { search } from '~/service/searchService';

const cx = classNames.bind(styles);

const Search = () => {
    const inputRef = useRef();

    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!searchValue) {
            if (searchResult.length > 0) setSearchResult([]);
            return;
        }
        setLoading(true);

        const fetchApi = async () => {
            setLoading(true);
            const result = await search(debouncedValue);
            setSearchResult(result);
            setLoading(false);
        };
        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setIsFocused(false);
    };
    return (
        //prevent tippy warning by using a wrapper
        <div>
            <TippyHeadless
                interactive={true}
                visible={searchResult.length > 0 && isFocused}
                placement="bottom-start"
                render={(attrs) => (
                    <div className="box" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h3 className={cx('search-title')}>Accounts</h3>
                            <ul className={cx('search-result')}>
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))}
                            </ul>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={(e) => {
                            if (e.target.value.startsWith(' ')) {
                                return;
                            } else {
                                setSearchValue(e.target.value);
                            }
                        }}
                        type="text"
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        className={cx('search-input')}
                        onFocus={() => setIsFocused(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && (
                        <button className={cx('loading-btn')}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <div className={cx('search-btn')}>
                        <SearchIcon />
                    </div>
                </div>
            </TippyHeadless>
        </div>
    );
};

export default Search;
