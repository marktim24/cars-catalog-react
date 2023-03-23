import { useState } from 'react'
import AddCar from './add-car/AddCar'
import CarItem from './car-item/CarItem.jsx'
import { cars as carsData } from './cars.data.js'

const Home = () => {
	const [cars, setCars] = useState(carsData)
	return (
		<div>
			<h1>Cars catalog</h1>
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
