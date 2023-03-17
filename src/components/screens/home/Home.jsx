import { cars } from './cars.data.js'
import styles from './Home.module.scss'

const Home = () => {
	return (
		<div>
			<h1>Cars catalog</h1>
			<div>
				{cars.length ? (
					cars.map(car => (
						<div key={car.id} className={styles.item}>
							<div
								className={styles.image}
								style={{ backgroundImage: `url(${car.image}` }}
							></div>
							<div className={styles.info}>
								<h2>{car.name}</h2>
								<p>
									{new Intl.NumberFormat('ru-RU', {
										style: 'currency',
										currency: 'EUR',
									}).format(car.price)}
								</p>
								<button>Purchase</button>
							</div>
						</div>
					))
				) : (
					<p>There are no cars available(</p>
				)}
			</div>
		</div>
	)
}

export default Home
