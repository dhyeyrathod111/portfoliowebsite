import '@/styles/globals.css'
import information from '../../information.json';
import { AppProvider } from '../controller/context'
import Head from 'next/head'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';


export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="robots" content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
				<meta name="google-site-verification" content="XG1ZPDr2VXJeFKPjcpdyzTFTxcw-jgLX9td7V48dBMI" />
				<meta property="og:locale" content="en_US" />
				<meta property="og:type" content="article" />
			</Head>
			<Component information={information} {...pageProps} />
			<SpeedInsights /><Analytics />
		</AppProvider>
	)
}
