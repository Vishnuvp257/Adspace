import React, { useState } from 'react';

import styles from '@/components/Filter.module.css';

function Filter(props) {
	const onKeyUp = (e) => {
		const filtered = props.printingSpaces.filter((item) =>
			item.toLowerCase().includes(e.target.value.toLowerCase())
		);
		props.onFilter(filtered);
	};

	return (
		<div className={styles.container}>
			<form
				role='search'
				method='get'
				id='searchform'
				className={styles.searchform}
				action=''>
				<input
					className={styles.searchInput}
					type='search'
					onChange={onKeyUp}
					name='s'
					id='s'
					placeholder='Search'
				/>
				<button
					className={styles.btn}
					type='submit'
					id='searchsubmit'>
					search
				</button>
			</form>
		</div>
	);
}

export default Filter;
