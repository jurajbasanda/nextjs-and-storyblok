import { storyblokEditable } from '@storyblok/react'
// import { Image } from 'next/image'

const Image = ({ blok }) => {
	return (
		<img
			style={{ maxWidth: '800px' }}
			{...storyblokEditable(blok)}
			src={blok.image.filename}
		/>
	)
}

export default Image
