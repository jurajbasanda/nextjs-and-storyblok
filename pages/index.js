import Head from 'next/head'
import { getStoryblokApi, StoryblokComponent } from '@storyblok/react'
import Layout from '../components/Layout'

export default function Home({ story }) {
	return <StoryblokComponent blok={story.content} />
}

export async function getServerSideProps(context) {
	// get the query object
	const insideStoryblok = context.query._storyblok
	const shouldLoadDraft = context.preview || insideStoryblok

	let slug = 'home'

	let sbParams = {
		version: 'published', // or 'draft'
	}

	if (shouldLoadDraft) {
		sbParams.version = 'draft'
	}

	const storyblokApi = getStoryblokApi()
	let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

	return {
		props: {
			story: data ? data.story : false,
			key: data ? data.story.id : false,
			preview: shouldLoadDraft || false,
		},
	}
}
