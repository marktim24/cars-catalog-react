import styles from '../Home.module.scss'
import CarPrice from './CarPrice'
const CarItem = ({ car }) => {
	return (
		<div className={styles.item}>
			<div
				className={styles.image}
				style={{ backgroundImage: `url(${car.image}` }}
			></div>
			<div className={styles.info}>
				<h2>{car.name}</h2>
				<CarPrice price={car.price} />
				<button>Purchase</button>
			</div>
		</div>
	)
}

export default CarItem
