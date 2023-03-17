import styles from '../Home.module.scss'
const CarItem = ({ car }) => {
	return (
		<div className={styles.item}>
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
	)
}

export default CarItem
