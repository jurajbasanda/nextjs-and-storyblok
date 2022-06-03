import { storyblokEditable } from '@storyblok/react'

const Teaser = ({ blok }) => {
	return <h2 {...storyblokEditable(blok)}>{blok.title}</h2>
}

export default Teaser
