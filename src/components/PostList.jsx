import React from 'react'
import PostItem from './PostItem'

// Destruct props to posts array on spot
export default function PostList({posts, title, remove}) {

    if (!posts.length) {
        return (
            <h1 style={{ textAlign: 'center' }}>
                Posts not found
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>
                {title}
            </h1>
            {
                // Using of indexes as a key is a bad practice,
                // because key must be static and unique,
                // but indexes changes along with the array changes
                posts.map((post, index) => <PostItem remove={remove} number={index + 1} post={post} key={post.id} />)
            }
        </div>
    )
}
