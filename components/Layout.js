import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({ children, story }) => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<h1>{story ? story.name : 'My Site'}</h1>
			</header>
			<Navbar />
			<main style={{ padding: '0rem' }}>{children}</main>
		</div>
	)
}

export default Layout
