import styles from './Home.module.scss'

const Home = () => {
	return (
		<div>
			<h1>Cars catalog</h1>
			<div className={styles.item}>
				<div className={styles.image}>
					<img src='/car.jpg' alt='' />
					<div className={styles.info}>
						<h2>Car Name</h2>
						<p>Price</p>
						<button>More</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
