import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`	
	* {
	padding: 0;
	margin: 0;
	border: 0;
	
	}

*,
*:before,
*:after {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
:focus,
:active {
	outline: none;
}
a:focus,
a:active {
	outline: none;
}
nav,
footer,
header,
aside {
	display: block;
}

html,
body {
	height: 100%;
	width: 100%;
	font-size: 100%;
	line-height: 1;
	-ms-text-size-adjust: 100%;
	-moz-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	
}

input,
button,
textarea {
	font-family: inherit;
}

input::-ms-clear {
	display: none;
}
button {
	cursor: pointer;
}
button::-moz-focus-inner {
	padding: 0;
	border: 0;
}
a,
a:visited {
	text-decoration: none;
}
a:hover {
	text-decoration: none;
}
ul li {
	list-style: none;
}
img {
	vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	font-size: inherit;
	font-weight: 400;
}

	#__next{
		min-height: 100%;
		background-color: #fff;
		color: black;
		display: flex;
		flex-direction: column;
	}

	.container{
		width: 1280px;
		margin: 0 auto;
		padding-left: 10px;
		padding-right: 10px;
	}

	@media(max-width: 768px){
		.container{
			max-width: 1280px;
			width: auto;
		}
	}
	
	header{
		background-color: aliceblue;
		flex: 0 0 100px;
	}

	main{
		background-color: #F1F1F1;
		flex: 1 1 auto;
		display: flex;
		justify-content: center;
		padding: 60px 0;
	}

	footer{
		background-color: aliceblue;
		flex: 0 0 80px;
	}

	header,footer{
		display: flex;
		align-items: center;
		justify-content: center;
		padding-left: 60px;
		padding-right: 60px;
	}


	h1, h2{
		font-size: 32px;
		font-weight: 700;
	}

`;

export default GlobalStyle;
