import { Html, Head, Main, NextScript } from 'next/document'
import information from '../../information.json';
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" type="image/ico" href={information.base_url + "assets/images/favicon.png"} />
				<link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
				<link rel="stylesheet" href="/assets/css/animate.min.css" />
				<link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
				<link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
				<link rel="stylesheet" href="/assets/css/font.css" />
				<link rel="stylesheet" href="/assets/css/webfonts.min.css" />
				<link rel="stylesheet" href="/assets/css/nice-select.min.css" />
				<link rel="stylesheet" href="/assets/css/style.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
