import Home from './Home'
import About from './About'

export const routes = [
	{
		name: 'Principal',
		component: Home,
		path: '/',
		exact: true
	},
	{
		name: 'Sobre',
		component: About,
		path: '/about'
	}
]

export const onHeader = ['/', '/about'].map(path =>
	routes.find(route => route.path === path)
)
