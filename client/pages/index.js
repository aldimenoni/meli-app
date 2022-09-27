import Head from "next/head";

export default function Home() {
	return (
		<>
			<div>
				<Head>
					<title>MELI | Frontend Test</title>
					<link rel="shortcut icon" href="./favicon.ico" />
					<meta
						name="description"
						content="Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre"
						key="desc"
					/>
					<meta property="og:title" content="MELI | Frontend Test" />
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1.0"
					></meta>
					<meta
						property="og:description"
						content="Bienvenido al test práctico para aspirantes al área de front-end de Mercado Libre"
					/>
					<meta
						property="og:image"
						content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
					/>
				</Head>
			</div>
		</>
	);
}
