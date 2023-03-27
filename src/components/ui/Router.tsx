import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route path='*' element={<div>Not Found</div>} />
			</Routes>
		</BrowserRouter>
	)
}

export default Router
