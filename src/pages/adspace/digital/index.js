import React, { useState } from 'react';
import Card from '@/components/Card';
import Filter from '@/components/Filter';

import styles from '@/styles/Printing.module.css'

const printingSpaces = [
    'Digital', 'Space',
    'Influencers', 'Insta', 'Facebook', 'Youtube', 'Snapchat',
    'Channels', 'Ad sters',
    'Media Spaces', 'News websites', 'Cinema',
    'Influencers',
    'Radio',
    'TV	',
    'OTT Apps',
    'Outside', 'Digital', 'Screen']

function Printing(props) {

    const [filtered, setFiltered] = useState(printingSpaces);

    const handleFilter = (filtered) => {
        setFiltered(filtered);
    }

    return (
        <>
            <div className={styles.header}>
                <h1>DIGITAL</h1>
            </div>
            <Filter printingSpaces={printingSpaces} onFilter={handleFilter} />
            <div className={styles.parentContainer}>
                {filtered.map(space => <a key={space} href=''>
                    <Card className={[styles.childContainer]}>{space}</Card>
                </a>)}
            </div>
        </>
    );
}

export default Printing;