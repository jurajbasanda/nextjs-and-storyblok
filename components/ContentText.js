import { render } from 'storyblok-rich-text-react-renderer'
import React from 'react'
import RichTextResolver from 'storyblok-js-client'

// import StoryblokClient from 'storyblok-js-client'

// const Storyblok = new StoryblokClient({ accessToken: process.env.NEXT_PUBLIC_API_KEY })

function ContentText({ blok }) {
	// const html = Storyblok.richTextResolver.render(blok.content)
	// return <div dangerouslySetInnerHTML={{ __html: html }} />
	return <div>{render(blok.content)}</div>
}
export default ContentText
