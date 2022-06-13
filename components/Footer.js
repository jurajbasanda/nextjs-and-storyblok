import React from 'react'

const Footer = () => {
	return (
		<footer style={{ display: ' flex', justifyContent: 'center', alignItems: 'center' }}>
			{`©`} {new Date().getFullYear()}
		</footer>
	)
}

export default Footer
