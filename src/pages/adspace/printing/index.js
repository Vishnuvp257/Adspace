import React, { useState } from 'react';
import Card from '@/components/Card';
import Filter from '@/components/Filter';

import styles from '@/styles/Printing.module.css'

const printingSpaces = [
    'Hoarding'
    , 'Lamp Post',
    , 'Train'
    , 'Metro'
    , 'Airports'
    , 'Bus backside'
    , 'Cab'
    , 'Signals'
    , 'Shops'
    , 'Malls'
    , 'Bus Shelters'
    , 'Metropillar'
    , 'Road Median'
    , 'Mobile Hoarding'
    , 'Bus Stations'
    , 'Railway Stations'
    , 'Flight'
    , 'Gantry'
    , 'PoleKiosk'
    , 'Metro Stations'
    , 'Door Branding'
    , 'Bridges'
    , 'Railway Gate'
    , 'Meetings'
    , 'Auto'
    , 'Private Bus'
    , 'Mall Branding'
    , 'Theaters'
    , 'Wall Wrap'
    , 'Office Space'
    , 'Police Booth'
    , 'Petrol Bump'
    , 'Magazine'
    , 'Newspaper'
    , 'Sports'
    , 'Unipole'
    , 'Billboard']

function Printing(props) {

    const [filtered, setFiltered] = useState(printingSpaces);

    const handleFilter = (filtered) => {
        setFiltered(filtered);
    }

    return (
        <>
            <div className={styles.header}>
                <h1>PRINTING</h1>
            </div>
            <Filter printingSpaces={printingSpaces} onFilter={handleFilter} />
            <div className={styles.parentContainer}>
                {filtered.map(space => <a key={space} href={`/adspace/printing/${space}`}>
                    <Card className={[styles.childContainer]}>{space}</Card>
                </a>)}
            </div>
        </>
    );
}

export default Printing;