import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
	@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');
	* {
    	margin: 0;
    	padding: 0;
    	outline: 0;
    	box-sizing: border-box;
  	}

	html, body, #root {
		height: 100vh;
	}
	.content {
		height: 100vh
	}
	body {
		font-family: 'Roboto', sans-serif;
		color: rgb(65,65,65);
		-webkit-font-smoothing: antialiased !important;
	}
	h1, h2, h3, h4, h5, h6 {
		color: rgb(50,50,50);
		font-family: 'Questrial'
	}
	p {
		text-indent: 32px;
		margin-bottom: 8px
	}


	ul {
		list-style: none;
	}
`
