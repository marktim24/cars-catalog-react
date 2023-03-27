import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './components/ui/Router'
import './index.css'
import AuthProvider from './providers/AuthProvider'
import '/src/assets/styles/main.scss'
AuthProvider

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<Router />
		</AuthProvider>
	</React.StrictMode>
)
