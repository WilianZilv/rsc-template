import React from 'react'

import { Container } from '../../styles/Article'

export default function About() {
	return (
		<Container>
			<h1>Sobre</h1>
			<br />
			<p>
				Esse template é baseado na estrutura utilizada no projeto{' '}
				<a
					target="_blank"
					href="https://github.com/Rocketseat/youtube-ui-clone-pipefy"
				>
					youtube-ui-clone-pipefy
				</a>{' '}
				da Rocketseat.
			</p>
			<br />
			<br />
			<h2> - Por quê?</h2>
			<br />
			<p>
				Esse template foi feito, principalmente para me auxiliar no
				desenvolvimento de qualquer projeto meu. O projeto tem uma
				estrutura de pastas que deve ser seguida para manter a
				organização.
			</p>
			<br />
			<h2> - Como?</h2>
			<br />
			<p>
				Estilos globais ou que são reaproveitados em outros componentes
				devem ficar na pasta <strong>src/styles</strong>.
			</p>
			<p>
				Cada componente deve ficar na pasta{' '}
				<strong>src/components</strong> com a seguinte estrutura:{' '}
				<strong>MeuComponente/index.js</strong>. Não deve ser feita
				nenhuma estilização dentro de <strong>index.js</strong>, por
				isso, é criado um <strong>styles.js</strong> para cada
				componente, onde é criado um container com toda a estilização
				utilizando o <strong>Styled Components</strong>.
			</p>
			<p>
				Cada rota deve ficar na pasta <strong>src/routes</strong> com a
				mesma estrutura que os componentes, porém o{' '}
				<strong>styles.js</strong> não é obrigatório.
			</p>
			<p>
				As rotas criadas devem ser adicionadas a lista de rotas em{' '}
				<strong>src/routes/index.js</strong> como um objeto com a
				seguinte estrutura:
				<br />
				<pre>{'{'}</pre>
				<pre>{'   name: \'Opcional\''}</pre>
				<pre>{'   path: \'/caminho\''}</pre>
				<pre>{'   component: MinhaPagina'}</pre>
				<pre>{'}'}</pre>
			</p>
			<h2> - Onde?</h2>
			<br />
			<p>
				Como assim? Onde o quê? Não entendi a pergunta. Mas agora vá pro
				código dar uma olhada e começar a trabalhar 👍{' '}
			</p>
		</Container>
	)
}
