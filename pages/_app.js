import '../styles/globals.css'
import { storyblokInit, apiPlugin } from '@storyblok/react'
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'
import Image from '../components/Image'
import Content from '../components/Content'

const apiToken = process.env.NEXT_PUBLIC_API_KEY

const components = {
	feature: Feature,
	grid: Grid,
	teaser: Teaser,
	page: Page,
	image: Image,
	content: Content,
}

storyblokInit({
	accessToken: apiToken,
	use: [apiPlugin],
	components,
})

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp
