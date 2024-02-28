import React, { useState, useRef, useMemo, useEffect } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";


function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	useEffect(() => { 
		fetchPosts();
	}, []);

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

	async function fetchPosts() {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
		setPosts(response.data);
	}

	return (
		<div className="App">

			<Button style={{margin: '5px 0'}} onClick={() => setModal(true)}>Create Post</Button>

			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>

			<PostFilter filter={filter} setFilter={setFilter} />
			
			<hr style={{ margin: '15px 0' }} />

			<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Post List" />

		</div>
	);
}

export default App;
