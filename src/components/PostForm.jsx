import React, {useState} from 'react'
import Button from "../components/UI/button/Button";
import Input from "../components/UI/input/Input";

const PostForm = ({create}) => {

	const [post, setPost] = useState({title: '', body: ''});


    const addNewPost = (e) => {
		e.preventDefault()

        const newPost = {
            ...post,
            id: Date.now()
        }

        create(newPost);
		setPost({title: '', body: ''})
	}

    return (
        <form>
            {/* Controllable component */}
            <Input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Post title" />
            <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Post body" />
            {/* <input ref={bodyInputRef} type="text" placeholder="Post body" /> */}
            <Button onClick={addNewPost}>Add</Button>
        </form>
    )
}

export default PostForm