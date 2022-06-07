/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
	},
}

module.exports = nextConfig
