import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './AddCar.module.scss'

const AddCar = ({ setCars }) => {
	const [data, setData] = useState({
		name: '',
		price: '',
		image: '',
	})
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
	})
	const createCar = data => {
		setCars(prev => [
			{
				id: prev.length + 1,
				...data,
			},
			...prev,
		])
		reset()
	}
	return (
		<form className={styles.form} onSubmit={handleSubmit(createCar)}>
			<input
				placeholder='Car Name'
				{...register('name', { required: 'Name is required' })}
			/>
			{errors.name && <p style={{ color: 'red' }}>{errors.message}</p>}
			<input
				placeholder='Car Price'
				{...register('price', { required: 'Price is  required' })}
			/>
			<input
				placeholder='Image'
				{...register('image', { required: 'Image link is  required' })}
			/>
			<button>Add</button>
		</form>
	)
}

export default AddCar
