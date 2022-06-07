import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({ children, story }) => {
	const { meta_description } = children[0]?.props.story.content
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
				<meta name='description' content={meta_description || 'Website'} />
				<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
				/>
				<link rel='profile' href='http://gmpg.org/xfn/11' />
			</Head>

			<header>
				<h1>{story ? story.content.name : 'My Site'}</h1>
			</header>
			<Navbar />
			<main style={{ padding: '0rem' }}>{children}</main>
		</div>
	)
}

export default Layout
