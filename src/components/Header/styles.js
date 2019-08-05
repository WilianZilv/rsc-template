import styled from 'styled-components'
import responsive from '../../styles/center'

export const Container = styled.div`
	header {
		height: 64px;
	}
	div {
		position: fixed;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 32px;
		height: 64px;
		background-color: rgba(255, 255, 255, 0.95);
		box-shadow: 0px 2px 4px rgba(25, 0, 0, 0.1);

		font-family: 'Questrial', sans-serif;
		a {
			all: unset;
			font-family: 'Roboto';
			margin: 0px 8px;
			cursor: pointer;
			:hover {
				border-bottom: 2px solid rgba(0, 0, 0, 0.75);
			}
		}
		.active {
			border-bottom: 2px solid rgba(0, 0, 0, 0.5);
		}
		${responsive}
	}
`
