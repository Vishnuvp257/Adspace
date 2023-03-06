import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

function Modal(props) {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, [])

    const handleClose = () => {
        props.onClose();
    }

    const modalContent = props.show ? (
        <div className={styles.overlay}>
            <button className={styles.closeBtn} onClick={handleClose}> X </button>
            <div className={styles.modal}>
                <div className={styles.body}>
                    {props.children}
                </div>
            </div>
        </div>
    ) : null

    if (isBrowser) {
        return ReactDOM.createPortal(modalContent,
            document.getElementById('modal-root'));
    } else {
        return null;
    }

}

export default Modal;