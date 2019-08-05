import React from 'react'

import { Container } from './styles'

import { NavLink } from 'react-router-dom'
import { onHeader } from '../../routes'

export default function Header() {
	return (
		<Container>
			<div>
				<h4>WilianZilv/rsc-template</h4>

				<nav>
					{onHeader.map(({ name, path }) => {
						return (
							<NavLink
								key={name}
								to={path}
								exact
								activeClassName="active"
							>
								{name}
							</NavLink>
						)
					})}
				</nav>
			</div>
			<header />
		</Container>
	)
}
