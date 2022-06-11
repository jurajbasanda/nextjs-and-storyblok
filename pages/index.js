import Head from 'next/head'
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react'
import Layout from '../components/Layout'

export default function Home({ story }) {
	return <StoryblokComponent blok={story.content} />
}

export async function getStaticProps() {
	// home is the default slug for the homepage in Storyblok
	let slug = 'home'

	// load the draft version
	let sbParams = {
		version: 'draft' || 'published', // or 'published'
	}

	const storyblokApi = getStoryblokApi()
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
		},
		revalidate: 3600, // revalidate every hour
	}
}
