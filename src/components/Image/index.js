import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            onError={handleError}
            {...props}
            ref={ref}
            alt={alt}
            src={fallback || src}
        />
    );
});
export default Image;
