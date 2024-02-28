import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css';
import PostList from "./components/PostList";

function App() {
	const [value, setValue] = useState("Initial value")
	const [posts, setPosts] = useState([
		{id: 1, title: 'Javascript', body: "This is a web script programming language"},
		{id: 2, title: 'C++', body: "This is a one of the most flexible and performance lang."},
		{id: 3, title: 'Java', body: "Generaly uses for enterprise programming"},
		{id: 4, title: 'Python', body: "It's like'd by students and scientists"},
	])

	const [foods, setFoods] = useState([
		{id: 1, title: 'Pasta', body: "Italy"},
		{id: 2, title: 'Pizza', body: "Italy"},
		{id: 3, title: 'Sushi', body: "Japan"},
		{id: 4, title: 'Sandwitch', body: "Worldwide"},
	])


	return (
		<div className="App">
			<h1>{value}</h1>
			<input type="text" value={value} onChange={event => setValue(event.target.value)}/>

			<Counter/>
			<ClassCounter/>

			<PostList posts={posts} title="Post List"/>
			<PostList posts={foods} title="Recipes List"/>
			
		</div>
	);
}

export default App;
