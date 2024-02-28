import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Javascript', body: "This is a web script programming language"},
		{id: 2, title: 'C++', body: "This is a one of the most flexible and performance lang."},
		{id: 3, title: 'Java', body: "Generaly uses for enterprise programming"},
		{id: 4, title: 'Python', body: "It's like'd by students and scientists"},
	])


	const createPost = (newPost) => setPosts([...posts, newPost])
	const removePost = (post) => setPosts(posts.filter(p => p.id !== post.id))

	return (
		<div className="App">
			
			<PostForm create={createPost}/>
			{
				// Conditional rendering
				posts.length !== 0
					? <PostList remove={removePost} posts={posts} title="Post List"/>
					: <h1 style={{textAlign: 'center'}}>Posts not found</h1>
			}
			
		</div>
	);
}

export default App;
