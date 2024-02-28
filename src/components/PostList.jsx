import React from 'react'
import PostItem from './PostItem'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

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
            <TransitionGroup>
                {
                    // Key uses only on root element
                    // Using of indexes as a key is a bad practice,
                    // because key must be static and unique,
                    // but indexes changes along with the array changes
                    posts.map((post, index) => 
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"    
                        >
                            <PostItem remove={remove} number={index + 1} post={post}/>
                        </CSSTransition>
                    )
                }
            </TransitionGroup>
        </div>
    )
}
