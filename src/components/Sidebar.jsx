import React from 'react';
import Link from 'next/link';

import styles from '@/components/Sidebar.module.css';

function Sidebar(props) {
	return (
		<div className={styles.sidebar}>
			<div className={styles.sidebarTabs}>Registered</div>
			<div className={styles.sidebarTabs}>Draft</div>
			<div className={styles.sidebarTabs}>Trash Bin</div>
		</div>
	);
}

export default Sidebar;
