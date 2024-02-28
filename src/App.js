import React, {useState, useRef} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'Javascript', body: "This is a web script programming language"},
		{id: 2, title: 'C++', body: "This is a one of the most flexible and performance lang."},
		{id: 3, title: 'Java', body: "Generaly uses for enterprise programming"},
		{id: 4, title: 'Python', body: "It's like'd by students and scientists"},
	])

	const [post, setPost] = useState({title: '', body: ''});

	const addNewPost = (e) => {
		e.preventDefault()

		setPosts([...posts, {...post, id: Date.now()}])
		setPost({title: '', body: ''})
	}

	return (
		<div className="App">
			<form>
				{/* Controllable component */}
				<Input value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text" placeholder="Post title"/>
				<Input value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text" placeholder="Post body"/>
				{/* <input ref={bodyInputRef} type="text" placeholder="Post body" /> */}
				<Button onClick={addNewPost}>Add</Button>
			</form>

			<PostList posts={posts} title="Post List"/>
			
		</div>
	);
}

export default App;
