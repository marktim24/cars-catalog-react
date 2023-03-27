import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../providers/AuthProvider'
import AddCar from './add-car/AddCar'
import CarItem from './car-item/CarItem.js'
import { cars as carsData } from './cars.data.js'

const Home = () => {
	const [cars, setCars] = useState(carsData)
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('http://localhost:5174')
			const data = await response.json()
			setCars(data)
		}
		fetchData()
	}, [])

	const { user, setUser } = useContext(AuthContext)

	return (
		<div>
			<h1>Cars catalog</h1>
			{user ? (
				<>
					<h2>Hello, {user.name}</h2>
					<button onClick={() => setUser(null)}>Logout</button>
				</>
			) : (
				<button onClick={() => setUser({ name: 'User' })}>Login</button>
			)}
			<AddCar setCars={setCars} />
			<div>
				{cars.length ? (
					cars.map(car => <CarItem key={car.id} car={car} />)
				) : (
					<p>There are no cars available(</p>
				)}
			</div>
		</div>
	)
}

export default Home
