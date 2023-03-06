import React from 'react';
import Card from '@/components/Card';

import styles from '@/styles/Adspace.module.css';

function Adspace(props) {
    return (
        <div className={styles.adContainer}>
            <a href='adspace/printing'>
                <Card>Printing Space</Card>
            </a>
            <a href='adspace/digital'>
                <Card>Digital Space</Card>
            </a>
        </div>
    );
}

export default Adspace;