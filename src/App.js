import React from 'react'
import GlobalStyle from './styles/global'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'
import Header from './components/Header'

function App() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Switch>
					{routes.map(({ name, component, path, exact }) => (
						<Route
							key={path}
							path={path}
							exact={!!exact}
							component={component}
						/>
					))}
				</Switch>
			</BrowserRouter>
			<GlobalStyle />
		</>
	)
}

export default App
