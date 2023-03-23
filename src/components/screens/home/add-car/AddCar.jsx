import { useState } from 'react'
import styles from './AddCar.module.scss'

const AddCar = ({ setCars }) => {
	const [data, setData] = useState({
		name: '',
		price: '',
		image: '',
	})
	const createCar = e => {
		e.preventDefault()
		setCars(prev => [
			{
				id: prev.length + 1,
				...data,
			},
			...prev,
		])
		setData('')
	}
	return (
		<form className={styles.form}>
			<input
				placeholder='Car Name'
				onChange={e => setData(prev => ({ ...prev, name: e.target.value }))}
				value={data.name}
			/>
			<input
				placeholder='Car Price'
				onChange={e => setData(prev => ({ ...prev, price: e.target.value }))}
				value={data.price}
			/>
			<input
				placeholder='Image'
				onChange={e => setData(prev => ({ ...prev, image: e.target.value }))}
				value={data.image}
			/>
			<button onClick={e => createCar(e)}>Add</button>
		</form>
	)
}

export default AddCar
