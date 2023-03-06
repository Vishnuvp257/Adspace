import React from 'react';
import styles from './RegisteredForm.module.css';

function RegisteredForm(props) {
	return (
		<div className={styles.container}>
			<div className={styles.formInfo}>
				<h2>{props.name}</h2>
				<h4>{props.code}</h4>
			</div>
			<div className={styles.innerContainer}>
				<div className={styles.editForm}>
					<button className={styles.btn}>edit</button>
					<button className={styles.btn}>delete</button>
				</div>
				<div className={styles.status}>
					Status <span>{props.status}</span>
				</div>
			</div>
		</div>
	);
}

export default RegisteredForm;
