import React, { useState, useRef, useMemo, useEffect } from "react";
import './../styles/App.css';
import PostList from "./../components/PostList";
import PostForm from "./../components/PostForm";
import PostFilter from "./../components/PostFilter";
import Modal from "./../components/UI/modal/Modal";
import Button from "./../components/UI/button/Button";
import { usePosts } from "./../hooks/usePosts";
import PostService from "./../API/PostService";
import Loader from "./../components/UI/Loader/Loader";
import { useFetching } from "./../hooks/useFetching";
import { getPageCount, getPagesArray } from "./../utils/pages";
import Pagination from "./../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import Select from "../components/UI/select/Select";



function Posts() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(5);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	// If you don't want to lose some object while render call, 
	// you can save objects by using useRef
	const lastElement = useRef();

	const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
		const response = await PostService.getAll(limit, page);
		setPosts([...posts, ...response.data]);

		const totalCount = response.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	})

	useObserver(lastElement, page < totalPages, isPostLoading, () => {
		setPage(page + 1);
	})
	

	useEffect(() => { 
		fetchPosts(limit, page);
	}, [page, limit]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

	const changePage = (page) => {
		setPage(page);
		fetchPosts(limit, page);
	}

	return (
		<div className="App">

			<Button style={{margin: '5px 0'}} onClick={() => setModal(true)}>Create Post</Button>

			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>

			<PostFilter filter={filter} setFilter={setFilter} />
			<Select
				value={limit}
				onChange={value => setLimit(value)}
				defaultValue="Elements on page..."
				options={[
					{value: "5", name: "5"},
					{value: "10", name: "10"},
					{value: "25", name: "25"},
					{value: "-1", name: "Show all"},
				]}			

			/>
			
			<hr style={{ margin: '15px 0' }} />

			{postError &&
				<h1>Caused error ${postError}</h1>
			}

			
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List" /> 
			<div ref={lastElement} style={{height: 20, background: 'transparent'}}/>
			{isPostLoading &&
				<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
			}



			{/* <Pagination page={page} changePage={changePage} totalPages={totalPages} /> */}

		</div>
	);
}

export default Posts;
