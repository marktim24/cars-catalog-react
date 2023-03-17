import { useMemo } from 'react'
import CarItem from './car-item/CarItem.jsx'
import { cars } from './cars.data.js'

const Home = () => {
	const filterCars = useMemo(() => cars.filter(car => car.price < 20000), [])
	return (
		<div>
			<h1>Cars catalog</h1>
			<div>
				{filterCars.length ? (
					filterCars.map(car => <CarItem key={car.id} car={car} />)
				) : (
					<p>There are no cars available(</p>
				)}
			</div>
		</div>
	)
}

export default Home
