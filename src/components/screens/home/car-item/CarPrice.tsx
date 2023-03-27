const CarPrice = ({ price }) => {
	console.log('CarPrice')
	return (
		<p>
			{new Intl.NumberFormat('ru-RU', {
				style: 'currency',
				currency: 'EUR',
			}).format(price)}
		</p>
	)
}

export default CarPrice
