import { createPortal } from 'react-dom';

import styles from './Modal.module.css';

type TModalProps = {
    children: React.ReactNode;
    onClose: () => void;
};

export const Modal = (props: TModalProps) => {
    const { children, onClose } = props;

    return createPortal(
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                {children}
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>,
        document.body
    );
};