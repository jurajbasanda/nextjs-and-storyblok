import '../styles/globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'

function MyApp({ Component, pageProps }) {
	storyblokInit({
		accessToken: process.env.STORYBLOK_API_KEY,
		use: [apiPlugin],
	})

	return <Component {...pageProps} />
}

export default MyApp
