import React from 'react'
import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'

const Layout = ({ children, story }) => {
	return (
		<div className={styles.container}>
			<Navbar />
			<header>
				<h1>{story ? story.content.name : 'My Site'}</h1>
			</header>
			<main style={{ padding: '0rem' }}>{children}</main>
		</div>
	)
}

export default Layout
