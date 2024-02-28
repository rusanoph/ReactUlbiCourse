

import React from 'react'
import Button from "../components/UI/button/Button";


export default function PostItem(props) {
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
            </div>
        </div>
    )
}
