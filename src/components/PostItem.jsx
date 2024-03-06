

import React from 'react'
import Button from "../components/UI/button/Button";
import { useNavigate } from 'react-router-dom';


export default function PostItem(props) {
    const navigate = useNavigate();

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Button onClick={() => props.remove(props.post)}>
                    Delete
                </Button>
                <Button onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Open
                </Button>
            </div>
        </div>
    )
}
