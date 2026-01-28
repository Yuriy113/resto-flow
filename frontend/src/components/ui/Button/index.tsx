import cn from 'clsx';

import styles from './Button.module.css';

type TButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
};

export const Button = (props: TButtonProps) => {
    const { children, onClick, className } = props;

    return (
        <button className={cn(styles.button, className)} onClick={onClick}>
            {children}
        </button>
    );
};