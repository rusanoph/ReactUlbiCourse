import React, { useState, useRef, useMemo } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import Button from "./components/UI/button/Button";


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: "This is a web script programming language" },
		{ id: 2, title: 'C++', body: "This is a one of the most flexible and performance lang." },
		{ id: 3, title: 'Java', body: "Generaly uses for enterprise programming" },
		{ id: 4, title: 'Python', body: "It's like'd by students and scientists" },
	])

	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);

	const sortedPosts = useMemo(() => {
		return filter.sort ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort])) : posts;
	}, [filter.sort, posts]);

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts]);

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

	return (
		<div className="App">

			<Button style={{marginTop: '20px'}} onClick={() => setModal(true)}>Create Post</Button>

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
