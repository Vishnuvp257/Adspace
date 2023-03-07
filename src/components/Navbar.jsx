import React from 'react';

import styles from '@/components/Navbar.module.css';

function Navbar(props) {
	return (
		<nav className={styles.navbar}>
			<h1 className={styles.navbarLogo}>
				{props.spaceName} <i className='fab fa-react'></i>
			</h1>
			<div className={styles.menuIcon}>
				{/* <i className={ ? 'fas fa-times' : 'fas fa-bars'}></i> */}
			</div>
			{/* <ul className={active ? 'navMenu active' : 'navMenu'}></ul> */}
			<button>SIGN UP</button>
		</nav>
	);
}

export default Navbar;
