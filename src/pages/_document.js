import { Html, Head, Main, NextScript } from 'next/document'
import information from '../../information.json';
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="stylesheet" href={information.base_url + "assets/css/bootstrap.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/animate.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/swiper-bundle.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/magnific-popup.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/font.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/webfonts.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/nice-select.min.css"} />
				<link rel="stylesheet" href={information.base_url + "assets/css/style.css"} />
				<link rel="shortcut icon" type="image/ico" href={information.base_url + "assets/images/favicon.png"} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
