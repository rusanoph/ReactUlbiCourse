import React from 'react'
import cl from './Pagination.module.css'
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {

	let pagesArray = getPagesArray(totalPages);
	
	const getPageClasses = (p) => page === p ? [cl.page, cl.page__current].join(' ') : cl.page;

	return (
		<div className={cl.page__wrapper}>
			{pagesArray.map(p =>
				<span
					onClick={() => changePage(p)}
					key={p}
					className={getPageClasses(p)}
				>
					{p}
				</span>
			)}
		</div>
	)
}

export default Pagination