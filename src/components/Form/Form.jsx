import React, { useState } from 'react';
import Image from 'next/image';

import styles from './Form.module.css';

const Form = () => {
	const [formData, setFormData] = useState({
		code: '',
		name: '',
		size: '',
		location: '',
		imgs: []
	});
	const [image, setImage] = useState([]);

	const changeHandler = (e) => {
		if (e.target.files) {
			setImage(e.target.files);
			setFormData((prev) => {
				images: Array.from(e.target.files), prev;
			});
		}
	};
	console.log(formData.name);
	const { code, name, size, location, imgs } = formData;

	const submitHandler = () => {
		console.log(formData);
	};

	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				placeholder='Code'
				type='number'
				name='Code'
				value={code}
				onChange={(e) =>
					setFormData((prev) => {
						code: e.target.value, prev;
					})
				}
				required
			/>
			<input
				className={styles.input}
				placeholder='Name'
				type='text'
				name='Name'
				value={name}
				onChange={(e) =>
					setFormData((prev) => {
						name: e.target.value, prev;
					})
				}
				required
			/>
			<input
				className={styles.input}
				placeholder='Size'
				type='number'
				name='Size'
				value={size}
				onChange={(e) =>
					setFormData((prev) => {
						size: e.target.value, prev;
					})
				}
				required
			/>
			<input
				className={styles.input}
				placeholder='Location'
				type='text'
				name='Location'
				value={location}
				onChange={(e) =>
					setFormData((prev) => {
						location: e.target.value, prev;
					})
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
					name='upload image'
					onChange={changeHandler}
					value={imgs}
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
				onClick={submitHandler}>
				Submit
			</button>
		</form>
	);
};

export default Form;
