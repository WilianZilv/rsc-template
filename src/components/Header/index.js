import React from 'react'

import { Container } from './styles'

import { Link } from 'react-router-dom'
import { onHeader } from '../../routes'

export default function Header() {
	return (
		<Container>
			<div>
				<h4>WilianZilv/rsc-template</h4>

				<nav>
					{onHeader.map(({ name, path }) => {
						return (
							<Link className="link" key={name} to={path}>
								{name}
							</Link>
						)
					})}
				</nav>
			</div>
			<header />
		</Container>
	)
}
