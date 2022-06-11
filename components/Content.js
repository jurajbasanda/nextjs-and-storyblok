import React from 'react'
import { storyblokEditable } from '@storyblok/react'

const Content = ({ blok }) => {
	return (
		<p {...storyblokEditable(blok)} style={{ maxWidth: '800px' }}>
			{blok.content}
		</p>
	)
}

export default Content
