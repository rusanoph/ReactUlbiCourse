import React, { useContext } from 'react'
import cl from './Navbar.module.css'
import { Link } from 'react-router-dom'
import Button from '../button/Button'
import { AuthContext } from '../../../context'

const Navbar = () => {

	const { isAuth, setIsAuth } = useContext(AuthContext);

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('auth');
	}

	return (
		<div className={cl.navbar}>
			<Button onClick={logout}>Sign out</Button>
			<div className={cl.navbar__links}>
				<Button><Link to="/about">About</Link></Button>
				<Button><Link to="/posts">Posts</Link></Button>
			</div>
		</div>
	)
}

export default Navbar