import Link from 'next/link'
import navStyle from '../styles/Nav.module.css'

const Navbar = () => {
	return (
		<nav className={navStyle.nav}>
			<ul>
				<li>
					<Link href='/about'>About</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
