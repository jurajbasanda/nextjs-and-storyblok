import Link from 'next/link'
import styles from '../styles/Nav.module.scss'

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<span>YOGA</span>
			<ul>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>
					<Link href='/about'>About</Link>
				</li>
				<li>
					<Link href='/blog'>Blog</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
