import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

const PostIdPage = () => {

	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);

	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data)
	})
	const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
		const response = await PostService.getComments(id);
		setComments(response.data)
	})

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id)
	}, [])


	return (
		<div>
			<h1>You are opened post with id = {params.id} now</h1>
			
			{isLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
				: <div>{post.id}. {post.title}</div>
			}

			<h2>Comments</h2>
			{isCommentsLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader /></div>
				: <div>
					{comments.map(comm => 
						<div style={{marginTop: 10}}>
							<h3>{comm.email}</h3>
							<div>{comm.body}</div>
						</div>
					)}
				</div>
			}
		</div>
	)
}

export default PostIdPage