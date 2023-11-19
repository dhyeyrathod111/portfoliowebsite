import '@/styles/globals.css'
import information from '../../information.json';
import { AppProvider } from '../controller/context'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="mobile-web-app-capable" content="yes" />
				<meta name="apple-mobile-web-app-capable" content="yes" />
				<meta name="robots" content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
				<meta name="google-site-verification" content="XG1ZPDr2VXJeFKPjcpdyzTFTxcw-jgLX9td7V48dBMI" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
			</Head>
			<Component information={information} {...pageProps} />
			{/* <Script defer src={information.base_url + "assets/js/jquery.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/bootstrap.bundle.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/SmoothScroll.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/jquery.nice-select.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/swiper-bundle.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/wow.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/tilt.jquery.min.js"}></Script>
			<Script defer src={information.base_url + "assets/js/jquery.magnific-popup.min.js"}></Script> */}
			{/* <Script defer src={information.base_url + "assets/js/custom.js"}></Script> */}
		</AppProvider>
	)
}
