import React, { useState } from 'react';

import Modal from '../Modal/Modal';
import Form from './Form';

import styles from './CreateForm.module.css';

function CreateForm(props) {
	const [showModal, setShowModal] = useState(false);

	const openModalHandler = () => {
		setShowModal(true);
	};

	const closeModalHandler = () => {
		setShowModal(false);
	};

	return (
		<div>
			<button
				className={styles.addBtn}
				onClick={openModalHandler}>
				{' '}
				+{' '}
			</button>
			<Modal
				show={showModal}
				onClose={closeModalHandler}>
				<Form />
			</Modal>
		</div>
	);
}

export default CreateForm;
