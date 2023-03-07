import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Form.module.css';

const Form = (props) => {
	const [formData, setFormData] = useState({
		code: '',
		name: '',
		size: '',
		location: ''
	});

	const [image, setImage] = useState([]);

	const changeHandler = (e) => {
		if (e.target.files) {
			setImage(e.target.files);
			console.log(e.target.files);
			setFormData({ ...formData, [e.target.name]: Array.from(e.target.files) });
		}
	};

	const { code, name, size, location } = formData;

	const submitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<form className={styles.form}>
			<input
				value={code}
				className={styles.input}
				placeholder='Code'
				type='number'
				name='code'
				onChange={(e) =>
					setFormData({ ...formData, [e.target.name]: e.target.value })
				}
				required
			/>
			<input
				value={name}
				className={styles.input}
				placeholder='Name'
				type='text'
				name='name'
				onChange={(e) =>
					setFormData({ ...formData, [e.target.name]: e.target.value })
				}
				required
			/>
			<input
				value={size}
				className={styles.input}
				placeholder='Size'
				type='number'
				name='size'
				onChange={(e) =>
					setFormData({ ...formData, [e.target.name]: e.target.value })
				}
				required
			/>
			<input
				value={location}
				className={styles.input}
				placeholder='Location'
				type='text'
				name='location'
				onChange={(e) =>
					setFormData({ ...formData, [e.target.name]: e.target.value })
				}
				required
			/>
			<div className={styles.inputContainer}>
				<div className={styles.imgContainer}>
					{Array.from(image).map((image, i) => (
						<Image
							key={i}
							src={image ? URL.createObjectURL(image) : null}
							alt={image}
							className={styles.imgStyles}
							width={150}
							height={100}
						/>
					))}
				</div>
				<input
					className={styles.input}
					type='file'
					name='imgs'
					onChange={changeHandler}
					required
					multiple
				/>
			</div>

			<button
				className={styles.submitBtn}
				type='button'>
				save
			</button>
			<button
				className={styles.submitBtn}
				type='submit'
				onClick={props.onSubmit}>
				Submit
			</button>
		</form>
	);
};

export default Form;
