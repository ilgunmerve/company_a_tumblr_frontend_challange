import React from 'react';
import {IPost} from '../types/types';
import { useParams, Redirect } from "react-router-dom";
import PostItem from '../components/PostItem';

interface SinglePostProps{
    posts: Array<IPost>,
}

const SinglePost =(props: SinglePostProps)=>{
    const {posts} = props;
    let { id } = useParams<any>();
    let postItem = posts.find(post => post.id === id);

    return (
        <>
            {postItem
                ? <PostItem key={postItem.id} post={postItem} />
                : <Redirect to='/not-found'/>
            }
           
        </>
    );
}

export default SinglePost;
