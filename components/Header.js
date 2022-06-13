/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { storyblokEditable, StoryblokComponent } from '@storyblok/react'
import Link from 'next/link'

const navigation = [
	{ name: 'Home', href: '/' },
	{ name: 'Articles', href: '/blog' },
	{ name: 'Teachers', href: '/teachers' },
]

export default function Header({ blok }) {
	return (
		<div {...storyblokEditable(blok)} className='relative bg-white overflow-hidden'>
			<div {...storyblokEditable(blok)} className='max-w-7xl mx-auto'>
				<div
					{...storyblokEditable(blok)}
					className='relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'
				>
					<svg
						className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2'
						fill='currentColor'
						viewBox='0 0 100 100'
						preserveAspectRatio='none'
						aria-hidden='true'
					>
						<polygon points='50,0 100,0 50,100 0,100' />
					</svg>

					{/* <Nav navigation={navigation} /> */}

					<main
						{...storyblokEditable(blok)}
						className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'
					>
						<div {...storyblokEditable(blok)} className='sm:text-center lg:text-left'>
							<h1
								{...storyblokEditable(blok)}
								className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'
							>
								{blok?.firstline && (
									<span {...storyblokEditable(blok)} className='block xl:inline'>
										{blok.firstline}
									</span>
								)}
								{blok?.secondline && (
									<span
										{...storyblokEditable(blok)}
										className='block text-indigo-600 xl:inline'
									>
										{blok.secondline}
									</span>
								)}
							</h1>
							{blok?.description && (
								<p
									{...storyblokEditable(blok)}
									className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
								>
									{blok?.description}
								</p>
							)}
							<div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
								<div className='rounded-md shadow'>
									{blok?.mainbutton && (
										<Link href='/teachers'>
											<a
												{...storyblokEditable(blok)}
												className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
											>
												{blok?.mainbutton}
											</a>
										</Link>
									)}
								</div>
								<div className='mt-3 sm:mt-0 sm:ml-3'>
									{blok?.secondarybutton && (
										<a
											{...storyblokEditable(blok)}
											href='#'
											className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10'
										>
											{blok?.secondarybutton}
										</a>
									)}
								</div>
							</div>
						</div>
					</main>
				</div>
			</div>
			<div
				{...storyblokEditable(blok)}
				className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'
			>
				{blok?.image?.filename && (
					<img
						{...storyblokEditable(blok)}
						className=' w-full object-cover  lg:w-full lg:h-full'
						src={blok?.image?.filename}
						alt=''
					/>
				)}
			</div>
		</div>
	)
}
