import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../router/routes'
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
	
	const {isAuth, isLoading} = useContext(AuthContext);
	console.log(isAuth);

	if (isLoading) {
		return <Loader />
	}

	return (
		isAuth	
		? (
			<Routes>
				{privateRoutes.map(route =>
					<Route key={route.path} path={route.path} element={route.component} />
				)}
				<Route path="*" element={<Navigate to="/error-404" replace />} />
			</Routes>
		)
		: (
			<Routes>
				{publicRoutes.map(route =>
					<Route key={route.path} path={route.path} element={route.component} />
				)}
				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		)
	)
}

export default AppRouter