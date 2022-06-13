import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<div className='bg-gray-200  p-4 px-4 sm:px-6 lg:px-8'>
				<main style={{ padding: '0rem' }}>{children}</main>
			</div>
			<Footer />
		</>
	)
}

export default Layout
