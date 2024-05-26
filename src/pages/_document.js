import { Html, Head, Main, NextScript } from 'next/document'
import information from '../../information.json';
export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" type="image/ico" href={information.base_url + "assets/images/dhyey_icon.webp"} />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
